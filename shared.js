/* ============================================================
   BizGrants Consulting - Shared JavaScript
   Consolidated from inline scripts across all pages.
   Last updated: April 2026
   ============================================================ */

/* === Booking URL (single source of truth) ===
   Used by the badge widget below and by inline CTAs across the site.
   Change this one line to repoint every "Book a Call" CTA to a different
   scheduling page. */
window.BIZGRANTS_BOOKING_URL = 'https://www.calendarsync.app/availability/bizgrants';

/* === Mobile Menu Toggle ===
   Pass true/false to force a state; with no argument it toggles.
   Keeps aria-expanded on the hamburger in step with the menu. */
function toggleMenu(force) {
  var navLinks = document.getElementById('nav-links');
  var button = document.querySelector('.hamburger');
  if (!navLinks) return;
  var open = typeof force === 'boolean' ? force : !navLinks.classList.contains('show');
  navLinks.classList.toggle('show', open);
  if (button) button.setAttribute('aria-expanded', String(open));
}

/* Menu accessibility: announce state, and close on Escape, on a tap outside
   the header, or when keyboard focus leaves the header. shared.js is
   deferred, so the header is already parsed here. */
(function initMenu() {
  var button = document.querySelector('.hamburger');
  var navLinks = document.getElementById('nav-links');
  if (!button || !navLinks) return;
  button.type = 'button';
  button.setAttribute('aria-controls', 'nav-links');
  button.setAttribute('aria-expanded', 'false');
  if (!button.getAttribute('aria-label')) button.setAttribute('aria-label', 'Toggle menu');
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navLinks.classList.contains('show')) {
      toggleMenu(false);
      button.focus();
    }
  });
  document.addEventListener('click', function (e) {
    if (navLinks.classList.contains('show') && !e.target.closest('header')) toggleMenu(false);
  });
  var nav = button.closest('nav') || navLinks.parentNode;
  nav.addEventListener('focusout', function (e) {
    if (e.relatedTarget && !e.relatedTarget.closest('header')) toggleMenu(false);
  });
})();

/* === Services dropdown in the main nav ===
   The toggle button opens and closes the submenu; Escape, a click outside
   or focus leaving the dropdown closes it. On narrow screens the submenu
   is always shown inside the mobile menu, so the toggle is hidden by CSS. */
(function initNavDropdown() {
  var drops = document.querySelectorAll('.nav-dropdown');
  Array.prototype.forEach.call(drops, function (drop) {
    var btn = drop.querySelector('.nav-dropdown-toggle');
    if (!btn) return;
    function setOpen(open) {
      drop.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', String(open));
    }
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      setOpen(!drop.classList.contains('open'));
    });
    drop.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drop.classList.contains('open')) {
        e.stopPropagation();
        setOpen(false);
        btn.focus();
      }
    });
    drop.addEventListener('focusout', function (e) {
      if (!e.relatedTarget || !drop.contains(e.relatedTarget)) setOpen(false);
    });
    document.addEventListener('click', function (e) {
      if (!drop.contains(e.target)) setOpen(false);
    });
  });
})();

/* === GA4 (Google Analytics) === */
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-CWBH1DYTQB');
gtag('config', 'AW-17532247075');

/* === Apollo Website Tracker === */
(function initApollo() {
  // Daily cache key: repeat page views reuse the browser cache instead of
  // re-downloading the tracker, which is never more than a day old.
  var v = Math.floor(Date.now() / 864e5),
      o = document.createElement('script');
  o.src = 'https://assets.apollo.io/micro/website-tracker/tracker.iife.js?v=' + v;
  o.async = true;
  o.onload = function () {
    if (window.trackingFunctions && window.trackingFunctions.onLoad) {
      window.trackingFunctions.onLoad({ appId: '699fd8cac132220015d03495' });
    }
  };
  document.head.appendChild(o);
})();

/* === CalendarSync Floating Badge ===
   Skip on thank-you and 404 pages where the badge is friction or wasted load. */
window.addEventListener('load', function () {
  var path = window.location.pathname;
  var skipBadge = /\/(thank-you|404)\/?$/.test(path) || path.endsWith('/404.html');
  if (skipBadge) return;
  if (!window.__bookingBadgeLoaded && typeof CalendarSync !== 'undefined') {
    CalendarSync.initBadge({
      url: window.BIZGRANTS_BOOKING_URL,
      text: 'Book a Call',
      color: '#0e1733',
      textColor: '#ffffff'
    });
    window.__bookingBadgeLoaded = true;
  }
});

/* === WhatsApp Button ===
   A floating "WhatsApp" button that sits above the booking badge. It opens
   a chat with a pre-filled message naming the topic of the page. The
   number takes WhatsApp messages and WhatsApp calls only, not phone calls.
   Skipped on thank-you and 404 pages, like the booking badge. */
window.BIZGRANTS_WHATSAPP = '6588875297';
(function initWhatsAppButton() {
  var path = window.location.pathname;
  if (/\/(thank-you|404)\/?$/.test(path) || path.endsWith('/404.html')) return;
  var topic = /ccp|career-conversion|mcpp/.test(path) ? 'the Career Conversion Programme (CCP)'
    : /job-redesign|wdg/.test(path) ? 'the job redesign grant (WDG)'
    : /ai-/.test(path) ? 'AI transformation'
    : 'grants for my company';
  var message = 'Hi BizGrants, I have a question about ' + topic + '.';

  var style = document.createElement('style');
  style.textContent =
    '.bg-wa{position:fixed;right:20px;bottom:70px;z-index:2147483644;display:inline-flex;align-items:center;gap:8px;' +
    'height:38px;padding:0 16px 0 12px;border-radius:999px;background:#fff;color:#0e1733;border:1px solid oklch(0.82 0.015 260);' +
    'box-shadow:0 4px 14px oklch(0.18 0.05 258 / 0.14);font-family:inherit;font-size:14px;font-weight:600;line-height:1;text-decoration:none}' +
    '.bg-wa:hover{border-color:#0e1733}' +
    '.bg-wa:focus-visible{outline:2px solid #0e1733;outline-offset:2px}' +
    '.bg-wa svg{width:20px;height:20px;flex:none;fill:#25d366}' +
    '@media print{.bg-wa{display:none}}';
  document.head.appendChild(style);

  var link = document.createElement('a');
  link.className = 'bg-wa';
  link.href = 'https://wa.me/' + window.BIZGRANTS_WHATSAPP + '?text=' + encodeURIComponent(message);
  link.target = '_blank';
  link.rel = 'noopener';
  link.setAttribute('aria-label', 'Message us on WhatsApp');
  link.setAttribute('data-wa-location', 'floating');
  link.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg><span>WhatsApp</span>';
  document.body.appendChild(link);
})();

/* === WhatsApp Click Tracking (GA4) ===
   Fires whatsapp_click for any link to wa.me: the floating button, the
   footer number and the contact page. Not a booking, so it is reported
   for review only and does not count as a Google Ads conversion. */
document.addEventListener('click', function (e) {
  var link = e.target.closest('a');
  if (!link || !/^https:\/\/wa\.me\//.test(link.href)) return;
  if (typeof gtag === 'function') {
    gtag('event', 'whatsapp_click', {
      link_location: link.getAttribute('data-wa-location') || (link.closest('footer') ? 'footer' : 'page'),
      page_location: window.location.href
    });
  }
}, { capture: true });

/* === Booking Click Tracking (GA4) ===
   Fires a cta_click event whenever a visitor clicks a link to the booking URL. */
document.addEventListener('click', function (e) {
  var link = e.target.closest('a');
  if (!link || !link.href) return;
  if (link.href.indexOf('calendarsync.app/availability/bizgrants') === -1) return;
  if (typeof gtag === 'function') {
    gtag('event', 'cta_click', {
      event_category: 'Booking',
      event_label: link.href,
      link_text: (link.textContent || '').trim(),
      page_location: window.location.href
    });
  }
}, { capture: true });

/* === Booking Confirmed Tracking (GA4 / Google Ads) ===
   The CalendarSync booking pop-up posts {source: 'calendarsync-embed',
   type: 'booked'} when a visitor confirms a booking on this site. Bookings
   made directly on the CalendarSync page (for example by our telemarketers
   on a client's behalf) never reach this page, so they are not counted.
   The second event reports the booking to the Google Ads "Book appointment"
   conversion action, so ad clicks that end in a booking are credited. */
window.addEventListener('message', function (e) {
  if (e.origin !== 'https://www.calendarsync.app') return;
  var d = e.data;
  if (!d || d.source !== 'calendarsync-embed' || d.type !== 'booked') return;
  if (typeof gtag === 'function') {
    gtag('event', 'book_appointment', {
      event_category: 'Booking',
      page_location: window.location.href
    });
    gtag('event', 'conversion', {
      send_to: 'AW-17532247075/g54TCOqJ85UbEKO4g6hB'
    });
  }
});

/* === Product Click Tracking (GA4) ===
   Fires product_click when a visitor follows a link to HuntSales or
   CalendarSync, BizGrants brands. Booking links are tracked above. */
document.addEventListener('click', function (e) {
  var link = e.target.closest('a');
  if (!link || !link.href) return;
  var product = /huntsales\.io/.test(link.href) ? 'HuntSales' : /calendarsync\.app/.test(link.href) ? 'CalendarSync' : '';
  if (!product || link.href.indexOf('/availability/') !== -1) return;
  if (typeof gtag === 'function') {
    gtag('event', 'product_click', {
      product: product,
      link_url: link.href,
      link_text: (link.textContent || '').trim(),
      page_location: window.location.href
    });
  }
}, { capture: true });

/* === Booking Badge Click Tracking ===
   Watches for the badge mounting in the DOM and tracks clicks on it. */
(function trackBookingBadge() {
  function sendCTA(label) {
    if (typeof window.gtag === 'function') {
      gtag('event', 'cta_click', {
        event_category: 'Booking',
        event_label: label,
        page_location: window.location.href
      });
    }
  }

  var obs = new MutationObserver(function () {
    var badge = document.querySelector('[data-booking-badge], .cs-badge, .calendarsync-badge');
    if (badge && !badge.__bgTracked) {
      badge.__bgTracked = true;
      badge.addEventListener('click', function () { sendCTA('badge_widget'); }, { capture: true });
    }
  });
  obs.observe(document.documentElement, { childList: true, subtree: true });
})();
