const form = document.getElementById('demo-form');
const formStatus = document.getElementById('form-status');
const year = document.getElementById('current-year');
const loadDemo = document.getElementById('load-demo');
const storylaneContainer = document.getElementById('storylane-container');
const storylaneFrame = document.getElementById('storylane-frame');
const demoToggleLabel = loadDemo?.querySelector('.demo-toggle-label');
const demoToggleArrow = loadDemo?.querySelector('.demo-toggle-arrow');

if (year) {
  year.textContent = new Date().getFullYear();
}

if (form && formStatus) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    formStatus.hidden = false;
    formStatus.textContent = 'Prototype only: your details were not sent or saved. On a live page, this request would be connected to a secure form service.';
    formStatus.focus({ preventScroll: true });
  });
}

if (loadDemo && storylaneContainer && storylaneFrame) {
  loadDemo.addEventListener('click', () => {
    const expanded = loadDemo.getAttribute('aria-expanded') === 'true';
    if (expanded) {
      storylaneContainer.hidden = true;
      loadDemo.setAttribute('aria-expanded', 'false');
      if (demoToggleLabel) demoToggleLabel.textContent = 'Load Interactive Demo';
      if (demoToggleArrow) demoToggleArrow.textContent = '↓';
      return;
    }

    if (!storylaneFrame.src) {
      storylaneFrame.src = 'https://app.storylane.io/demo/ljif3mmua22m';
    }

    storylaneContainer.hidden = false;
    loadDemo.setAttribute('aria-expanded', 'true');
    if (demoToggleLabel) demoToggleLabel.textContent = 'Hide Interactive Demo';
    if (demoToggleArrow) demoToggleArrow.textContent = '↑';
  });
}

// Play the provided 89% survey statistic once when it enters the viewport.
// Keep the final value visible for reduced-motion users and assistive technology.
const proofCount = document.querySelector('[data-count-to]');
if (proofCount) {
  const target = Number.parseInt(proofCount.dataset.countTo, 10);
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (Number.isFinite(target) && !reduceMotion && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      observer.disconnect();

      const duration = 1100;
      let startedAt;
      const render = (timestamp) => {
        if (startedAt === undefined) startedAt = timestamp;
        const progress = Math.min((timestamp - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        proofCount.textContent = String(Math.round(target * eased));
        if (progress < 1) {
          window.requestAnimationFrame(render);
        } else {
          proofCount.textContent = String(target);
        }
      };
      window.requestAnimationFrame(render);
    }, { threshold: 0.45 });

    observer.observe(proofCount);
  } else {
    proofCount.textContent = String(target);
  }
}
