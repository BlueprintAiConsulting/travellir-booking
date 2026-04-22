/* ============================================
   TRAVELLIR — Shared Components & Property Data
   Injected Header, Footer, Property Catalog
   ============================================ */

(function () {
  'use strict';

  /* =========================================
     PROPERTY DATABASE — Master Catalog
     All properties stored here.
     Only location:"West Virginia" rendered.
     ========================================= */
  const PROPERTY_DB = {

    /* ---------- WEST VIRGINIA (Tavern Suites) — 11 Properties ---------- */

    'marlinton-3br-river': {
      title: '3BR Home Marlinton | Near Snowshoe, River & Trails',
      location: 'West Virginia',
      state: 'wv',
      image: 'assets/images/property-rustic.webp',
      price: '$133',
      rating: '4.9',
      beds: '3 Beds', baths: '1 Bath', guests: '7 Guests',
      types: 'STR / MTR',
      dataType: 'str mtr',
      featured: true,
      description: 'Stay in the heart of downtown Marlinton at this spacious 3-bedroom home, perfectly located right on the Greenbrier River Trail. Enjoy walkable access to local shops, restaurants, and the famous Old Mountain Tavern. With a fenced backyard and easy access to biking, hiking, fishing, and Snowshoe skiing, this home is ideal for families or groups seeking comfort, space, and outdoor adventure year-round.',
      amenities: ['Wi-Fi', 'Smart TV', 'Full Kitchen', 'Air Conditioning', 'Free Parking', 'Fenced Backyard', 'Washer/Dryer', 'Workspace'],
      rules: ['No smoking', 'No pets', 'No parties or events', 'Children allowed', 'Check-in after 4 PM', 'Check-out before 11 AM']
    },

    'snowshoe-1br-modern': {
      title: '1BR Near Snowshoe | Modern Downtown Apt + Parking',
      location: 'West Virginia',
      state: 'wv',
      image: 'assets/images/property-loft.webp',
      price: '$108',
      rating: '4.8',
      beds: '1 Bed', baths: '1 Bath', guests: '4 Guests',
      types: 'STR / MTR',
      dataType: 'str mtr',
      description: 'A modern downtown apartment just minutes from Snowshoe Mountain. Features contemporary furnishings, a fully equipped kitchen, and free parking. The perfect basecamp for skiing, mountain biking, and exploring the Greenbrier River Trail.',
      amenities: ['Wi-Fi', 'Smart TV', 'Full Kitchen', 'Air Conditioning', 'Free Parking', 'Downtown Location'],
      rules: ['No smoking', 'No parties', 'Check-in after 3 PM', 'Check-out before 11 AM']
    },

    'king-bed-1br-snowshoe': {
      title: 'Modern 1BR Downtown | King Bed + Parking, Snowshoe',
      location: 'West Virginia',
      state: 'wv',
      image: 'assets/images/property-studio.webp',
      price: '$108',
      rating: '4.9',
      beds: '1 Bed', baths: '1 Bath', guests: '4 Guests',
      types: 'STR / MTR',
      dataType: 'str mtr',
      description: 'Relax in style in this modern 1-bedroom apartment featuring a luxurious king-size bed, sleek décor, and a convenient downtown Marlinton location. Just a short drive from Snowshoe Mountain with free parking included.',
      amenities: ['Wi-Fi', 'Smart TV', 'King Bed', 'Full Kitchen', 'Air Conditioning', 'Free Parking', 'Downtown Location'],
      rules: ['No smoking', 'No parties', 'Check-in after 3 PM', 'Check-out before 11 AM']
    },

    'renovated-2br-downtown': {
      title: 'Newly Renovated 2BR Home | Downtown Marlinton',
      location: 'West Virginia',
      state: 'wv',
      image: 'assets/images/property-exterior.webp',
      price: '$125',
      rating: '4.8',
      beds: '2 Beds', baths: '2.5 Baths', guests: '4 Guests',
      types: 'STR / MTR / LTR',
      dataType: 'str mtr ltr',
      description: 'A beautifully renovated 2-bedroom home in the heart of downtown Marlinton. Features modern finishes, two and a half bathrooms, and a warm, inviting atmosphere. Walk to restaurants, shops, and the Greenbrier River Trail.',
      amenities: ['Wi-Fi', 'Smart TV', 'Full Kitchen', 'Air Conditioning', 'Washer/Dryer', 'Free Parking', '2.5 Baths', 'Downtown Location'],
      rules: ['No smoking', 'No parties', 'Check-in after 4 PM', 'Check-out before 11 AM']
    },

    'pink-suite': {
      title: 'Pink Theme Room in Marlinton!',
      location: 'West Virginia',
      state: 'wv',
      image: 'assets/images/property-pink.webp',
      price: '$110',
      rating: '5.0',
      beds: '1 Bed', baths: '1 Bath', guests: '7 Guests',
      types: 'STR / MTR',
      dataType: 'str mtr',
      featured: true,
      description: 'An Instagram-worthy retreat with curated neon signs, lush greenery walls, and ultra-plush furnishings. Perfect for couples, content creators, and anyone craving a memorable, one-of-a-kind escape in the mountains of West Virginia.',
      amenities: ['Wi-Fi', 'Smart TV', 'Full Kitchen', 'Air Conditioning', 'Washer/Dryer', 'Free Parking', 'Neon Lighting', 'Ring Camera Security'],
      rules: ['No smoking', 'No parties or events', 'Check-in after 4 PM', 'Check-out before 11 AM', 'Pets allowed with approval']
    },

    'greenbrier-2br': {
      title: 'Modern 2BR Downtown | Greenbrier Trail Access',
      location: 'West Virginia',
      state: 'wv',
      image: 'assets/images/property-loft.webp',
      price: '$120',
      rating: '4.8',
      beds: '2 Beds', baths: '1 Bath', guests: '6 Guests',
      types: 'STR / MTR',
      dataType: 'str mtr',
      description: 'This modern 2-bedroom apartment offers direct access to the Greenbrier River Trail — perfect for hikers, bikers, and nature lovers. Comfortably sleeps six with contemporary furnishings and a fully equipped kitchen.',
      amenities: ['Wi-Fi', 'Smart TV', 'Full Kitchen', 'Air Conditioning', 'Free Parking', 'Trail Access', 'Downtown Location'],
      rules: ['No smoking', 'No parties', 'Check-in after 3 PM', 'Check-out before 11 AM']
    },

    'trails-1br-marlinton': {
      title: 'Modern 1BR Marlinton | Near Trails & Snowshoe',
      location: 'West Virginia',
      state: 'wv',
      image: 'assets/images/property-studio.webp',
      price: '$95',
      rating: '4.7',
      beds: '1 Bed', baths: '1 Bath', guests: '3 Guests',
      types: 'STR / MTR',
      dataType: 'str mtr',
      description: 'A cozy and modern 1-bedroom apartment ideal for solo travelers or couples. Located in Marlinton with easy access to hiking trails and a short drive to Snowshoe Mountain. Clean, quiet, and well-appointed.',
      amenities: ['Wi-Fi', 'Smart TV', 'Kitchenette', 'Air Conditioning', 'Free Parking', 'Mountain Views'],
      rules: ['No smoking', 'No parties', 'Check-in after 3 PM', 'Check-out before 11 AM']
    },

    'twin-bed-1br-snowshoe': {
      title: '1BR w/ 2 Beds Near Snowshoe | Modern Apt + Parking',
      location: 'West Virginia',
      state: 'wv',
      image: 'assets/images/property-loft.webp',
      price: '$108',
      rating: '4.8',
      beds: '1 Bed', baths: '1 Bath', guests: '4 Guests',
      types: 'STR / MTR',
      dataType: 'str mtr',
      description: 'A versatile 1-bedroom apartment featuring two beds — great for friends traveling together or small families. Modern finishes, free parking, and just minutes from Snowshoe Mountain.',
      amenities: ['Wi-Fi', 'Smart TV', 'Full Kitchen', 'Air Conditioning', 'Free Parking', '2 Beds', 'Downtown Location'],
      rules: ['No smoking', 'No parties', 'Check-in after 3 PM', 'Check-out before 11 AM']
    },

    'greenbrier-3br-yard': {
      title: '3BR Downtown | Greenbrier Trail + Fenced Yard',
      location: 'West Virginia',
      state: 'wv',
      image: 'assets/images/property-rustic.webp',
      price: '$145',
      rating: '4.9',
      beds: '3 Beds', baths: '1 Bath', guests: '8 Guests',
      types: 'STR / MTR / LTR',
      dataType: 'str mtr ltr',
      description: 'A spacious 3-bedroom home in downtown Marlinton with a fully fenced yard — perfect for families with children or pets. Direct access to the Greenbrier River Trail and all downtown amenities within walking distance.',
      amenities: ['Wi-Fi', 'Smart TV', 'Full Kitchen', 'Air Conditioning', 'Washer/Dryer', 'Free Parking', 'Fenced Yard', 'Trail Access'],
      rules: ['No smoking indoors', 'Pets allowed', 'Check-in after 4 PM', 'Check-out before 11 AM']
    },

    'cozy-2br-marlinton': {
      title: 'Cozy 2BR Apt | Downtown Marlinton | Near Snowshoe',
      location: 'West Virginia',
      state: 'wv',
      image: 'assets/images/property-studio.webp',
      price: '$105',
      rating: '4.7',
      beds: '2 Beds', baths: '1 Bath', guests: '4 Guests',
      types: 'STR / MTR',
      dataType: 'str mtr',
      description: 'A cozy and inviting 2-bedroom apartment in the heart of downtown Marlinton. Thoughtfully furnished with everything you need for a comfortable stay. Walk to restaurants and shops, or take a short drive to Snowshoe Mountain.',
      amenities: ['Wi-Fi', 'Smart TV', 'Full Kitchen', 'Air Conditioning', 'Free Parking', 'Downtown Location'],
      rules: ['No smoking', 'No parties', 'Check-in after 3 PM', 'Check-out before 11 AM']
    },

    'ev-charger-3br': {
      title: '3BR Home Near Snowshoe | EV Charger | Pet Friendly',
      location: 'West Virginia',
      state: 'wv',
      image: 'assets/images/property-exterior.webp',
      price: '$150',
      rating: '4.9',
      beds: '3 Beds', baths: '2 Baths', guests: '6 Guests',
      types: 'STR / MTR / LTR',
      dataType: 'str mtr ltr',
      description: 'A modern 3-bedroom home with an EV charger — the only pet-friendly, electric-vehicle-ready rental near Snowshoe. Spacious interior with two full bathrooms, a large yard, and all the comforts of home for families and adventure seekers.',
      amenities: ['Wi-Fi', 'Smart TV', 'Full Kitchen', 'Air Conditioning', 'Washer/Dryer', 'Free Parking', 'EV Charger', 'Pet Friendly', 'Large Yard'],
      rules: ['No smoking indoors', 'Pets allowed with approval', 'No parties over 8 guests', 'Check-in after 4 PM', 'Check-out before 11 AM']
    },

    /* ---------- FLORIDA (stored, not displayed) ---------- */

    'fl-boca-portfolio': {
      title: 'South Florida Portfolio',
      location: 'Florida',
      state: 'fl',
      image: 'assets/images/property-exterior.webp',
      price: 'Inquire',
      rating: 'N/A',
      beds: 'Various', baths: 'Various', guests: 'Various',
      types: 'STR / MTR / LTR',
      dataType: 'str mtr ltr',
      description: '34 properties across South Florida — Boca Raton, Delray Beach, Fort Lauderdale, West Palm Beach, and Pompano Beach. Contact us for availability and pricing.',
      amenities: [],
      rules: []
    },

    /* ---------- ARIZONA (stored, not displayed) ---------- */

    'az-desert-oasis': {
      title: 'Desert Oasis — Arizona',
      location: 'Arizona',
      state: 'az',
      image: 'assets/images/property-exterior.webp',
      price: 'Inquire',
      rating: 'New',
      beds: 'TBD', baths: 'TBD', guests: 'TBD',
      types: 'Coming Soon',
      dataType: 'str mtr ltr',
      description: 'A stunning desert retreat launching soon. Stay tuned for details.',
      amenities: [],
      rules: []
    }
  };

  /* ---- Filter: Only West Virginia properties for display ---- */
  function getDisplayProperties() {
    var result = {};
    Object.keys(PROPERTY_DB).forEach(function (id) {
      if (PROPERTY_DB[id].location === 'West Virginia') {
        result[id] = PROPERTY_DB[id];
      }
    });
    return result;
  }

  /* ---- Render a single property card HTML ---- */
  function renderPropertyCard(id, prop, index) {
    var delayClass = index > 0 ? ' reveal-delay-' + Math.min(index, 4) : '';
    var featuredClass = prop.featured ? ' property-card--featured' : '';
    var badgeExtra = prop.featured
      ? '<span class="property-card__badge-item property-card__badge-item--popular">⭐ Most Popular</span>'
      : '';

    return '<article class="property-card' + featuredClass + ' reveal' + delayClass + '" data-type="' + prop.dataType + '" data-state="' + prop.state + '">' +
      '<div class="property-card__image">' +
        '<img src="' + prop.image + '" alt="' + prop.title + '" loading="lazy">' +
        '<div class="property-card__image-overlay"></div>' +
        '<div class="property-card__badge">' +
          badgeExtra +
          '<span class="property-card__badge-item">' + prop.types + '</span>' +
        '</div>' +
        '<button class="property-card__favorite" aria-label="Save"><svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></button>' +
      '</div>' +
      '<div class="property-card__body">' +
        '<div class="property-card__location"><svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> ' + prop.location + '</div>' +
        '<h3 class="property-card__title">' + prop.title + '</h3>' +
        '<p class="property-card__desc">' + (prop.description.length > 140 ? prop.description.substring(0, 140) + '…' : prop.description) + '</p>' +
        '<div class="property-card__amenities">' +
          '<span class="property-card__amenity">🛏 ' + prop.beds + '</span>' +
          '<span class="property-card__amenity">🛁 ' + prop.baths + '</span>' +
          '<span class="property-card__amenity">👥 ' + prop.guests + '</span>' +
        '</div>' +
        '<div class="property-card__footer">' +
          '<div class="property-card__price">' + prop.price + ' <span>/ night</span></div>' +
          '<div class="property-card__rating"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> ' + prop.rating + '</div>' +
        '</div>' +
        '<div class="property-card__cta"><a href="property.html?id=' + id + '" class="btn btn--navy" style="font-size:0.78rem;padding:12px 24px;">View Details →</a></div>' +
      '</div>' +
    '</article>';
  }

  /* ---- Expose on window for other scripts ---- */
  window.TravellirData = {
    allProperties: PROPERTY_DB,
    getDisplayProperties: getDisplayProperties,
    getProperty: function (id) { return PROPERTY_DB[id] || null; },
    renderPropertyCard: renderPropertyCard
  };

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
        <a href="index.html" aria-label="Travellir Home" class="header__logo-link" id="header-logo">
          <svg viewBox="0 0 320 60" class="header__logo" xmlns="http://www.w3.org/2000/svg">
            <text x="0" y="48" font-family="'Cormorant Garamond','DM Serif Display',Georgia,serif" font-size="52" font-weight="700">
              <tspan fill="#111E35">Travell</tspan><tspan fill="#CC2929">ir</tspan>
            </text>
            <g transform="translate(232,2)" fill="#CC2929">
              <circle cx="20" cy="20" r="18" fill="none" stroke="#CC2929" stroke-width="2.5"/>
              <ellipse cx="20" cy="20" rx="8" ry="18" fill="none" stroke="#CC2929" stroke-width="1.5"/>
              <line x1="2" y1="20" x2="38" y2="20" stroke="#CC2929" stroke-width="1.5"/>
              <path d="M30,-2 L38,6 L20,10 Z" fill="#CC2929"/>
              <path d="M25,2 L42,2 L38,6 L20,10 L25,2Z" fill="#CC2929"/>
            </g>
          </svg>
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
            <svg viewBox="0 0 320 60" class="footer__logo" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="48" font-family="'Cormorant Garamond','DM Serif Display',Georgia,serif" font-size="52" font-weight="700">
                <tspan fill="#FFFFFF">Travell</tspan><tspan fill="#CC2929">ir</tspan>
              </text>
              <g transform="translate(232,2)" fill="#CC2929">
                <circle cx="20" cy="20" r="18" fill="none" stroke="#CC2929" stroke-width="2.5"/>
                <ellipse cx="20" cy="20" rx="8" ry="18" fill="none" stroke="#CC2929" stroke-width="1.5"/>
                <line x1="2" y1="20" x2="38" y2="20" stroke="#CC2929" stroke-width="1.5"/>
                <path d="M30,-2 L38,6 L20,10 Z" fill="#CC2929"/>
                <path d="M25,2 L42,2 L38,6 L20,10 L25,2Z" fill="#CC2929"/>
              </g>
            </svg>
            <p class="footer__brand-desc">Beautifully curated vacation rentals in Marlinton, WV — just 30 minutes from Snowshoe Mountain, one of the East Coast's premier ski resorts. Your mountain home away from home.</p>
            <div style="margin-top: var(--space-lg);">
              <a href="mailto:bookings@travellir.com" class="footer__contact-item">
                <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                bookings@travellir.com
              </a>
              <a href="tel:+15615363132" class="footer__contact-item" style="margin-top:8px;">
                <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                (561) 536-3132
              </a>
            </div>
          </div>

          <div>
            <h4 class="footer__heading">Explore</h4>
            <nav class="footer__links">
              <a href="properties.html" class="footer__link">All Properties</a>
              <a href="properties.html" class="footer__link">West Virginia</a>
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
