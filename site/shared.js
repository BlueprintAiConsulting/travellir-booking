/* ============================================
   TRAVELLIR — Shared Components
   Injected Header, Footer & Utilities
   ============================================ */

(function () {
  'use strict';

  /* ---- Detect current page ---- */
  const path = window.location.pathname;
  const page = path.substring(path.lastIndexOf('/') + 1).replace('.html', '') || 'index';

  function activeClass(p) {
    return page === p ? ' active' : '';
  }

  /* ---- Shared Header ---- */
  function injectHeader() {
    const el = document.getElementById('site-header');
    if (!el) return;

    el.innerHTML = `
    <header class="header" id="header">
      <div class="container">
        <a href="index.html" aria-label="Travellir Home">
          <img src="assets/images/logo.webp" alt="Travellir Premier Rentals" class="header__logo" id="header-logo">
        </a>
        <nav class="header__nav" id="nav-menu">
          <a href="properties.html" class="header__link${activeClass('properties')}" id="nav-properties">Properties</a>
          <a href="group-living.html" class="header__link${activeClass('group-living')}" id="nav-group-living">Group Living</a>
          <a href="about.html" class="header__link${activeClass('about')}" id="nav-about">About</a>
          <a href="contact.html" class="header__link${activeClass('contact')}" id="nav-contact">Contact</a>
          <a href="contact.html" class="btn btn--primary header__cta" id="nav-book">Book Now</a>
        </nav>
        <button class="header__mobile-toggle" id="mobile-toggle" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>`;
  }

  /* ---- Shared Footer ---- */
  function injectFooter() {
    const el = document.getElementById('site-footer');
    if (!el) return;

    el.innerHTML = `
    <footer class="footer" id="footer">
      <div class="container">
        <div class="footer__grid">
          <div>
            <img src="assets/images/logo.webp" alt="Travellir" class="footer__logo">
            <p class="footer__brand-desc">41 beautifully curated rental properties across South Florida, West Virginia, and Arizona. Your home away from home — for any length of stay.</p>
            <div style="margin-top: var(--space-lg);">
              <a href="mailto:bookings@travellir.com" class="footer__contact-item">
                <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                bookings@travellir.com
              </a>
            </div>
          </div>

          <div>
            <h4 class="footer__heading">Explore</h4>
            <nav class="footer__links">
              <a href="properties.html" class="footer__link">All Properties</a>
              <a href="properties.html#fl" class="footer__link">South Florida</a>
              <a href="properties.html#wv" class="footer__link">West Virginia</a>
              <a href="properties.html#az" class="footer__link">Arizona</a>
              <a href="about.html" class="footer__link">Why Travellir</a>
            </nav>
          </div>

          <div>
            <h4 class="footer__heading">Guests</h4>
            <nav class="footer__links">
              <a href="contact.html" class="footer__link">Book a Stay</a>
              <a href="about.html#reviews" class="footer__link">Guest Reviews</a>
              <a href="contact.html#faq" class="footer__link">FAQ</a>
              <a href="contact.html" class="footer__link">Contact Us</a>
            </nav>
          </div>

          <div>
            <h4 class="footer__heading">Company</h4>
            <nav class="footer__links">
              <a href="about.html" class="footer__link">About Us</a>
              <a href="group-living.html" class="footer__link">Group Living</a>
              <a href="#" class="footer__link">Privacy Policy</a>
              <a href="#" class="footer__link">Terms of Service</a>
            </nav>
          </div>
        </div>

        <div class="footer__bottom">
          <p>&copy; 2026 Travellir Premier Rentals. All rights reserved.</p>
          <div class="footer__socials">
            <a href="#" class="footer__social" aria-label="Instagram" id="social-instagram">
              <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="#" class="footer__social" aria-label="Facebook" id="social-facebook">
              <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" class="footer__social" aria-label="Website" id="social-website">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>`;
  }

  /* ---- Header scroll effect ---- */
  function setupScrollEffect() {
    const header = document.querySelector('.header');
    if (!header) return;

    let raf;
    window.addEventListener('scroll', function () {
      if (raf) return;
      raf = requestAnimationFrame(function () {
        header.classList.toggle('header--scrolled', window.scrollY > 50);
        raf = null;
      });
    }, { passive: true });
  }

  /* ---- Mobile toggle ---- */
  function setupMobileMenu() {
    const toggle = document.getElementById('mobile-toggle');
    const menu = document.getElementById('nav-menu');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', function () {
      const isOpen = menu.classList.toggle('open');
      toggle.classList.toggle('active', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    menu.querySelectorAll('.header__link, .header__cta').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.classList.remove('active');
        menu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---- Scroll reveal ---- */
  function setupScrollReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('visible'); });
      return;
    }

    const obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    els.forEach(function (el) { obs.observe(el); });
  }

  /* ---- Smooth scroll for in-page anchors ---- */
  function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const header = document.querySelector('.header');
          const offset = header ? header.offsetHeight + 16 : 100;
          const pos = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: pos, behavior: 'smooth' });
        }
      });
    });
  }

  /* ---- Initialize ---- */
  function init() {
    injectHeader();
    injectFooter();
    setupScrollEffect();
    setupMobileMenu();
    setupScrollReveal();
    setupSmoothScroll();
    console.log('[Travellir] Shared components loaded — page: ' + page);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
