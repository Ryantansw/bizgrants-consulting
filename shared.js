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

/* === GA4 (Google Analytics) === */
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-CWBH1DYTQB');

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
