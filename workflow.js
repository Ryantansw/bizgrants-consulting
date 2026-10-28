/* ============================================================
   Animated workflow explorer (AI Transformation pages).
   Every workflow is in the HTML. This script moves a dot from step to
   step, highlights each step's value as the dot arrives, and switches
   between workflows. It loops while on screen, stops off screen, and does
   not animate for visitors who prefer reduced motion.
   ============================================================ */
(function () {
  var STEP_MS = 1900;
  var END_MS = 2600;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function Runner(root) {
    this.root = root;
    this.flow = null;
    this.steps = [];
    this.i = -1;
    this.timers = [];
    this.still = reduce;
    this.visible = false;
  }
  Runner.prototype.clear = function () {
    this.timers.forEach(clearTimeout);
    this.timers = [];
  };
  Runner.prototype.later = function (fn, ms) {
    this.timers.push(setTimeout(fn, ms));
  };
  Runner.prototype.use = function (flow) {
    this.clear();
    this.flow = flow;
    this.steps = Array.prototype.slice.call(flow.querySelectorAll('.wf-step'));
    this.reset();
    if (this.still) this.showAll();
    else this.run();
  };
  Runner.prototype.reset = function () {
    this.i = -1;
    this.steps.forEach(function (s) { s.classList.remove('is-active', 'is-done', 'is-sending'); });
  };
  Runner.prototype.showAll = function () {
    this.steps.forEach(function (s) { s.classList.add('is-done'); });
  };
  Runner.prototype.run = function () {
    this.clear();
    if (this.still || !this.visible) return;
    var self = this;
    this.later(function () { self.tick(); }, this.i < 0 ? 300 : 500);
  };
  Runner.prototype.tick = function () {
    if (this.still || !this.visible) return;
    var self = this, s = this.steps;
    if (this.i >= 0) {
      s[this.i].classList.remove('is-active', 'is-sending');
      s[this.i].classList.add('is-done');
    }
    this.i++;
    if (this.i >= s.length) {
      this.later(function () { self.reset(); self.tick(); }, END_MS);
      return;
    }
    s[this.i].classList.add('is-active');
    if (this.i < s.length - 1) {
      var cur = s[this.i];
      this.later(function () { cur.classList.add('is-sending'); }, STEP_MS - 950);
    }
    this.later(function () { self.tick(); }, STEP_MS);
  };
  Array.prototype.forEach.call(document.querySelectorAll('[data-wf]'), function (root) {
    var runner = new Runner(root);
    var flows = Array.prototype.slice.call(root.querySelectorAll('.wf-flow'));
    var chips = Array.prototype.slice.call(root.querySelectorAll('.wf-chip'));
    var select = root.querySelector('.wf-select-wrap select');
    if (!flows.length) return;

    function show(id) {
      var target = flows[0];
      flows.forEach(function (f) {
        var on = f.getAttribute('data-flow') === id;
        f.hidden = !on;
        if (on) target = f;
      });
      chips.forEach(function (c) { c.setAttribute('aria-pressed', String(c.getAttribute('data-flow') === id)); });
      if (select && select.value !== id) select.value = id;
      runner.use(target);
    }
    chips.forEach(function (c) {
      c.addEventListener('click', function () { show(c.getAttribute('data-flow')); });
    });
    if (select) select.addEventListener('change', function () { show(select.value); });

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          runner.visible = en.isIntersecting;
          if (runner.visible) runner.run(); else runner.clear();
        });
      }, { threshold: 0.25 }).observe(root);
    } else {
      runner.visible = true;
    }

    root.classList.add('is-enhanced');
    var first = flows[0].getAttribute('data-flow');
    var hash = window.location.hash.replace('#wf-', '');
    var linked = flows.some(function (f) { return f.getAttribute('data-flow') === hash; });
    show(linked ? hash : first);
    if (linked) document.getElementById('wf-' + hash).scrollIntoView();
  });
})();
