const bodyEl = document.body;
const navToggleBtn = document.getElementById('navToggle');
const navLinks = Array.from(document.querySelectorAll('[data-nav-link]'));
const codeExamples = Array.from(document.querySelectorAll('[data-example]'));
const colorCopyButtons = Array.from(document.querySelectorAll('[data-copy-value]'));

async function copyText(text) {
  if (!text || !text.trim()) {
    return false;
  }

  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

if (navToggleBtn) {
  navToggleBtn.addEventListener('click', () => {
    bodyEl.classList.toggle('sidebar-open');
  });
}

const currentPage = bodyEl.dataset.page || 'home';
navLinks.forEach((link) => {
  const isActive = link.dataset.navLink === currentPage;
  link.classList.toggle('active', isActive);

  link.addEventListener('click', () => {
    if (window.innerWidth <= 900) {
      bodyEl.classList.remove('sidebar-open');
    }
  });
});

codeExamples.forEach((example) => {
  const tabs = Array.from(example.querySelectorAll('[data-code-tab]'));
  const panels = Array.from(example.querySelectorAll('[data-code-panel]'));
  const copyBtn = example.querySelector('[data-copy]');

  if (!tabs.length || !panels.length || !copyBtn) {
    return;
  }

  const getActivePanelName = () => {
    const active = panels.find((panel) => panel.classList.contains('active'));
    return active ? active.dataset.codePanel || 'example' : 'example';
  };

  const updateCopyButton = () => {
    const panelName = getActivePanelName();

    if (panelName === 'html') {
      copyBtn.disabled = false;
      copyBtn.textContent = 'Copy HTML';
      copyBtn.classList.remove('copied');
      return;
    }

    if (panelName === 'css') {
      copyBtn.disabled = false;
      copyBtn.textContent = 'Copy CSS';
      copyBtn.classList.remove('copied');
      return;
    }

    copyBtn.disabled = true;
    copyBtn.textContent = 'Copy';
    copyBtn.classList.remove('copied');
  };

  const setPanel = (panelName) => {
    tabs.forEach((tab) => {
      tab.classList.toggle('active', tab.dataset.codeTab === panelName);
    });

    panels.forEach((panel) => {
      panel.classList.toggle('active', panel.dataset.codePanel === panelName);
    });

    updateCopyButton();
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

  copyBtn.addEventListener('click', async () => {
    if (copyBtn.disabled) {
      return;
    }

    const activePanel = panels.find((panel) => panel.classList.contains('active'));
    const codeEl = activePanel ? activePanel.querySelector('code') : null;
    const text = codeEl ? codeEl.textContent || '' : '';
    const copied = await copyText(text);

    if (!copied) {
      copyBtn.textContent = 'Failed';
      window.setTimeout(() => updateCopyButton(), 900);
      return;
    }

    copyBtn.textContent = 'Copied';
    copyBtn.classList.add('copied');
    window.setTimeout(() => updateCopyButton(), 900);
  });

  setPanel('example');
});

colorCopyButtons.forEach((btn) => {
  btn.addEventListener('click', async () => {
    const value = btn.dataset.copyValue || '';
    const copied = await copyText(value);

    if (!copied) {
      return;
    }

    btn.classList.add('copied');
    const previous = btn.textContent;
    btn.textContent = '✓';
    window.setTimeout(() => {
      btn.classList.remove('copied');
      btn.textContent = previous;
    }, 700);
  });
});
