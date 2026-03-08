/* ============================================================
   BizGrants Consulting - Shared JavaScript
   Consolidated from inline scripts across all pages.
   Last updated: March 2026
   ============================================================ */

/* === Mobile Menu Toggle === */
function toggleMenu() {
  var navLinks = document.getElementById('nav-links');
  if (navLinks) {
    navLinks.classList.toggle('show');
  }
}

/* === GA4 (Google Analytics) === */
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-CWBH1DYTQB');

/* === Apollo Website Tracker === */
(function initApollo() {
  var n = Math.random().toString(36).substring(7),
      o = document.createElement('script');
  o.src = 'https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=' + n;
  o.async = true;
  o.defer = true;
  o.onload = function () {
    if (window.trackingFunctions && window.trackingFunctions.onLoad) {
      window.trackingFunctions.onLoad({ appId: '699fd8cac132220015d03495' });
    }
  };
  document.head.appendChild(o);
})();

/* === Calendly Badge Widget === */
window.addEventListener('load', function () {
  if (!window.__calendlyBadgeWidgetLoaded && typeof Calendly !== 'undefined') {
    Calendly.initBadgeWidget({
      url: 'https://calendly.com/enquiries-bizgrants/30min',
      text: 'Book a Call',
      color: '#0069ff',
      textColor: '#ffffff',
      branding: true
    });
    window.__calendlyBadgeWidgetLoaded = true;
  }
});

/* === Calendly Click Tracking (GA4) === */
document.addEventListener('click', function (e) {
  var link = e.target.closest('a');
  if (link && link.href && link.href.indexOf('calendly.com/enquiries-bizgrants') !== -1) {
    if (typeof gtag === 'function') {
      gtag('event', 'cta_click', {
        event_category: 'Calendly',
        event_label: link.href,
        link_text: (link.textContent || '').trim(),
        page_location: window.location.href
      });
    }
  }
}, { capture: true });

/* === Calendly Widget Interaction Tracking === */
(function trackCalendlyWidget() {
  function sendCTA(label) {
    if (typeof window.gtag === 'function') {
      gtag('event', 'cta_click', {
        event_category: 'Calendly',
        event_label: label,
        page_location: window.location.href
      });
    }
  }

  var obs = new MutationObserver(function () {
    var badge = document.querySelector('.calendly-badge-widget, .calendly-badge-content');
    if (badge && !badge.__bgTracked) {
      badge.__bgTracked = true;
      badge.addEventListener('click', function () { sendCTA('badge_widget'); }, { capture: true });
    }
  });
  obs.observe(document.documentElement, { childList: true, subtree: true });

  window.addEventListener('message', function (ev) {
    try {
      var originHost = new URL(ev.origin).hostname || '';
      if (!/calendly\.com$/i.test(originHost)) return;
      var data = typeof ev.data === 'string' ? JSON.parse(ev.data) : ev.data;
      if (!data) return;

      if (data.event &&
          (data.event.indexOf('calendly.profile_page_viewed') === 0 ||
           data.event.indexOf('calendly.event_type_viewed') === 0 ||
           data.event.indexOf('calendly.date_and_time_selected') === 0)) {
        sendCTA(data.event);
      }

      if (data.event === 'calendly.event_scheduled') {
        if (typeof window.gtag === 'function') {
          gtag('event', 'calendly_scheduled', { event_category: 'Calendly', page_location: window.location.href });
        }
      }
    } catch (_) {}
  });
})();
