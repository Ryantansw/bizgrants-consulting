/* ============================================================
   Scroll-triggered motion for process lists and funding charts.
   Everything is readable without this script. Each animation plays
   once, finishes within five seconds, and is skipped for visitors
   who prefer reduced motion.
   ============================================================ */
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var canWatch = 'IntersectionObserver' in window;

  function onView(el, threshold, fn) {
    var io = new IntersectionObserver(function (entries) {
      if (!entries[0].isIntersecting) return;
      io.disconnect();
      fn();
    }, { threshold: threshold });
    io.observe(el);
  }

  // Process rails: a dot travels down the numbered steps, lighting each one.
  var MS = 550;
  Array.prototype.forEach.call(document.querySelectorAll('ol.step-list, .process-panel:not(.process-panel--row) ol.process-steps'), function (ol) {
    var items = Array.prototype.filter.call(ol.children, function (li) { return li.tagName === 'LI'; });
    if (items.length < 2) return;
    ol.classList.add('rail');
    ol.style.setProperty('--rail-ms', MS + 'ms');
    if (reduce || !canWatch) {
      items.forEach(function (li) { li.classList.add('is-lit', 'is-go'); });
      return;
    }
    onView(ol, 0.35, function () {
      var k = 0;
      ol.style.setProperty('--dot-y', '0px');
      ol.classList.add('is-running');
      items[0].classList.add('is-lit');
      function next() {
        if (k >= items.length - 1) {
          setTimeout(function () { ol.classList.remove('is-running'); }, 250);
          return;
        }
        items[k].classList.add('is-go');
        k++;
        ol.style.setProperty('--dot-y', (items[k].offsetTop - items[0].offsetTop) + 'px');
        setTimeout(function () {
          items[k].classList.add('is-lit');
          setTimeout(next, 200);
        }, MS);
      }
      setTimeout(next, 350);
    });
  });

  // Funding charts: bars grow from zero when the chart scrolls into view.
  Array.prototype.forEach.call(document.querySelectorAll('[data-fund]'), function (fig) {
    if (reduce || !canWatch) return;
    fig.classList.add('is-ready');
    onView(fig, 0.4, function () { fig.classList.add('is-on'); });
  });

  // Funding chart tooltips: hover a bar to see what it is. The values are also in the text.
  Array.prototype.forEach.call(document.querySelectorAll('[data-fund]'), function (fig) {
    var tip = fig.querySelector('.fund-tip');
    if (!tip) return;
    function show(seg) {
      tip.textContent = seg.getAttribute('data-tip');
      tip.hidden = false;
      var f = fig.getBoundingClientRect(), s = seg.getBoundingClientRect();
      var x = Math.min(Math.max(s.left - f.left + s.width / 2, 90), f.width - 90);
      tip.style.left = x + 'px';
      tip.style.top = (s.top - f.top - 8) + 'px';
    }
    // WCAG 1.4.13: the tooltip stays while hovered, and Escape dismisses it
    var timer = null;
    function hide() { clearTimeout(timer); tip.hidden = true; }
    function hideSoon() { clearTimeout(timer); timer = setTimeout(hide, 300); }
    Array.prototype.forEach.call(fig.querySelectorAll('.fund-seg[data-tip]'), function (seg) {
      seg.addEventListener('mouseenter', function () { clearTimeout(timer); show(seg); });
      seg.addEventListener('mouseleave', hideSoon);
    });
    tip.addEventListener('mouseenter', function () { clearTimeout(timer); });
    tip.addEventListener('mouseleave', hideSoon);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') hide(); });
  });
})();
