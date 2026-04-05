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

codeExamples.forEach((example) => {
  const tabs = Array.from(example.querySelectorAll('[data-code-tab]'));
  const panels = Array.from(example.querySelectorAll('[data-code-panel]'));
  const copyBtn = example.querySelector('[data-copy]');

  const setPanel = (panelName) => {
    tabs.forEach((tab) => {
      tab.classList.toggle('active', tab.dataset.codeTab === panelName);
    });

    panels.forEach((panel) => {
      panel.classList.toggle('active', panel.dataset.codePanel === panelName);
    });
  };

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const panelName = tab.dataset.codeTab;
      if (!panelName) {
        return;
      }
      setPanel(panelName);
    });
  });

  if (!copyBtn) {
    return;
  }

  copyBtn.addEventListener('click', async () => {
    const activePanel = panels.find((panel) => panel.classList.contains('active'));
    const codeEl = activePanel ? activePanel.querySelector('code') : null;
    const text = codeEl ? codeEl.textContent || '' : '';

    if (!text.trim()) {
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      copyBtn.classList.add('copied');
      copyBtn.textContent = 'Copied';
      window.setTimeout(() => {
        copyBtn.classList.remove('copied');
        copyBtn.textContent = 'Copy';
      }, 1300);
    } catch {
      copyBtn.textContent = 'Failed';
      window.setTimeout(() => {
        copyBtn.textContent = 'Copy';
      }, 1300);
    }
  });
});
