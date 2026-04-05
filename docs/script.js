const bodyEl = document.body;
const navToggleBtn = document.getElementById('navToggle');
const navLinks = Array.from(document.querySelectorAll('[data-nav-link]'));
const sections = Array.from(document.querySelectorAll('[data-doc-section]'));
const codeExamples = Array.from(document.querySelectorAll('[data-example]'));

function setActiveNav(hash) {
  navLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === hash);
  });
}

if (navToggleBtn) {
  navToggleBtn.addEventListener('click', () => {
    bodyEl.classList.toggle('sidebar-open');
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 900) {
      bodyEl.classList.remove('sidebar-open');
    }
  });
});

if ('IntersectionObserver' in window && sections.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) {
        return;
      }

      const id = visible.target.getAttribute('id');
      if (id) {
        setActiveNav(`#${id}`);
      }
    },
    {
      rootMargin: '-20% 0px -60% 0px',
      threshold: [0.1, 0.2, 0.4, 0.65]
    }
  );

  sections.forEach((section) => observer.observe(section));
} else if (sections.length) {
  setActiveNav(`#${sections[0].id}`);
}

async function copyText(text) {
  if (!text.trim()) {
    return false;
  }

  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

codeExamples.forEach((example) => {
  const tabs = Array.from(example.querySelectorAll('[data-code-tab]'));
  const panels = Array.from(example.querySelectorAll('[data-code-panel]'));
  const copyBtn = example.querySelector('[data-copy]');

  if (!panels.length) {
    return;
  }

  const getActivePanel = () => panels.find((panel) => panel.classList.contains('active')) || panels[0];

  const getActivePanelName = () => {
    const panelName = getActivePanel().dataset.codePanel || 'code';
    return panelName.toUpperCase();
  };

  const getActiveCodeText = () => {
    const codeEl = getActivePanel().querySelector('code');
    return codeEl ? codeEl.textContent || '' : '';
  };

  const setCopyButtonState = (state = 'default') => {
    if (!copyBtn) {
      return;
    }

    const labelBase = `Copy ${getActivePanelName()}`;

    if (state === 'copied') {
      copyBtn.textContent = 'Copied';
      copyBtn.classList.add('copied');
      return;
    }

    if (state === 'failed') {
      copyBtn.textContent = 'Failed';
      copyBtn.classList.remove('copied');
      return;
    }

    copyBtn.textContent = labelBase;
    copyBtn.classList.remove('copied');
  };

  const flashCopyFeedback = (state) => {
    setCopyButtonState(state);
    window.setTimeout(() => {
      setCopyButtonState('default');
    }, 1100);
  };

  const copyActivePanel = async () => {
    const didCopy = await copyText(getActiveCodeText());
    flashCopyFeedback(didCopy ? 'copied' : 'failed');
  };

  const setPanel = (panelName) => {
    tabs.forEach((tab) => {
      tab.classList.toggle('active', tab.dataset.codeTab === panelName);
    });

    panels.forEach((panel) => {
      panel.classList.toggle('active', panel.dataset.codePanel === panelName);
    });

    setCopyButtonState('default');
  };

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const panelName = tab.dataset.codeTab;
      if (panelName) {
        setPanel(panelName);
      }
    });
  });

  if (copyBtn) {
    copyBtn.addEventListener('click', copyActivePanel);
  }

  panels.forEach((panel) => {
    panel.setAttribute('title', 'Click to copy');
    panel.setAttribute('tabindex', '0');

    panel.addEventListener('click', copyActivePanel);
    panel.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        copyActivePanel();
      }
    });
  });

  const activeName = getActivePanel().dataset.codePanel;
  if (activeName) {
    setPanel(activeName);
  } else {
    setCopyButtonState('default');
  }
});
