(function() {
  'use strict';

  // Current language, default to saved or 'zh'
  let currentLang = localStorage.getItem('lang') || 'zh';

  function t(key) {
    return (i18n[currentLang] && i18n[currentLang][key]) || key;
  }

  function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = t(key);
      if (text) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = text;
        } else {
          el.textContent = text;
        }
      }
    });

    // Handle data-i18n-attr for attributes like title, aria-label
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const spec = el.getAttribute('data-i18n-attr');
      const [attr, key] = spec.split(':');
      const text = t(key);
      if (text) el.setAttribute(attr, text);
    });
  }

  function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    applyTranslations();
    updateLangButtons();
  }

  function updateLangButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.textContent = t('lang.btn');
    });
  }

  // Lightbox
  function initLightbox() {
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    if (!lightbox || !lightboxImg) return;

    document.querySelectorAll('.screenshot-item img, .arch-image img').forEach(function(img) {
      img.addEventListener('click', function() {
        lightboxImg.src = this.src;
        lightbox.classList.add('open');
      });
    });

    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
        lightbox.classList.remove('open');
      }
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') lightbox.classList.remove('open');
    });
  }

  // Mobile menu toggle
  function initMobileMenu() {
    const btn = document.querySelector('.mobile-menu-btn');
    const links = document.querySelector('.nav-links');
    if (!btn || !links) return;

    btn.addEventListener('click', () => {
      links.classList.toggle('open');
    });

    // Close on link click
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('open'));
    });
  }

  // Init on DOM ready
  function init() {
    applyTranslations();
    updateLangButtons();
    initMobileMenu();
    initLightbox();

    // Language switch buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const next = currentLang === 'zh' ? 'en' : 'zh';
        switchLanguage(next);
      });
    });
  }

  document.addEventListener('DOMContentLoaded', init);
})();
