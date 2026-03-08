/* ============================================================
   NEOMETER — LP Descubra Sua Economia — JavaScript
   ============================================================ */

(function () {
  'use strict';

  const overlay = document.getElementById('modal-diagnostico');
  const openBtns = document.querySelectorAll('[data-modal-open]');
  const closeBtn = document.getElementById('modal-close');
  const form = document.querySelector('.lp-form');

  if (!overlay) return;

  function openModal() {
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    // Focus first input after transition
    setTimeout(function () {
      const firstInput = overlay.querySelector('input');
      if (firstInput) firstInput.focus();
    }, 60);
  }

  function closeModal() {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Open triggers
  openBtns.forEach(function (btn) {
    btn.addEventListener('click', openModal);
  });

  // Close button
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  // Click backdrop to close
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeModal();
  });

  // ESC key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('open')) {
      closeModal();
    }
  });

  // Form prevent default (not integrated yet)
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
    });
  }
})();
