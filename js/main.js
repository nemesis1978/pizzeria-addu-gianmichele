/* ============================================================
   Pizzeria Addu Gianmichele — interazioni
   Piano: 3 feature minime, reversibili, zero dipendenze.
   1. Header scroll-shadow
   2. Mobile nav toggle
   3. Reveal on scroll + anno footer
   ============================================================ */
(function () {
  'use strict';

  /* --- 1. Header: ombra allo scroll --- */
  var header = document.querySelector('.site-header');
  function onScroll() {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 10);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* --- 2. Mobile nav --- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('mobile-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Chiudi menu di navigazione' : 'Apri menu di navigazione');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* --- 3. Reveal on scroll --- */
  var targets = document.querySelectorAll(
    '.section-head, .split-text > *, .review, .contact-card, .band-item, .gallery-grid > figure, .hero-facts > li'
  );
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion || !('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });
    targets.forEach(function (el) { el.classList.add('reveal'); io.observe(el); });
  }


  /* --- 4. Filtri menù --- */
  var chips = document.querySelectorAll('.chip-filter');
  var groups = document.querySelectorAll('.m-group');
  if (chips.length && groups.length) {
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        var filter = chip.getAttribute('data-filter');
        chips.forEach(function (c) {
          var active = c === chip;
          c.classList.toggle('is-active', active);
          c.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
        groups.forEach(function (g) {
          var show = filter === 'all' || g.getAttribute('data-group') === filter;
          g.classList.toggle('is-hidden', !show);
        });
      });
    });
  }

  /* --- Anno corrente nel footer --- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
