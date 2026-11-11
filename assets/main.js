// Lets the stylesheet know scripts run (the programs switcher only shows its tabs then).
document.documentElement.classList.add('js');

// Programs switcher on the homepage. Without script every program shows in order.
document.querySelectorAll('[data-switch]').forEach(function (sw) {
  var tabs = Array.prototype.slice.call(sw.querySelectorAll('[role="tab"]'));
  if (!tabs.length) return;
  function select(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      var panel = document.getElementById(t.getAttribute('aria-controls'));
      if (panel) panel.hidden = !on;
    });
    if (focus) tab.focus();
  }
  select(tabs.filter(function (t) { return t.getAttribute('aria-selected') === 'true'; })[0] || tabs[0], false);
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t, false); });
    t.addEventListener('keydown', function (e) {
      var d = (e.key === 'ArrowRight' || e.key === 'ArrowDown') ? 1 : (e.key === 'ArrowLeft' || e.key === 'ArrowUp') ? -1 : 0;
      if (!d) return;
      e.preventDefault();
      select(tabs[(i + d + tabs.length) % tabs.length], true);
    });
  });
});

// The header bar tucks away while scrolling down and comes back on the way up.
(function () {
  var bar = document.querySelector('[data-bar]');
  if (!bar) return;
  var last = window.scrollY, ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var y = window.scrollY;
      bar.classList.toggle('is-tucked', y > last && y > 240 && !bar.contains(document.activeElement));
      last = y;
      ticking = false;
    });
  }, { passive: true });
  bar.addEventListener('focusin', function () { bar.classList.remove('is-tucked'); });
})();

// Newsletter sign-up
// There is no newsletter service connected yet, so for now the form opens an
// email to info@ais-saarland.org with the address filled in. When a service
// (e.g. Brevo, MailerLite, Buttondown) is set up, replace this with its form action.
(function () {
  var form = document.getElementById('newsletter');
  if (!form) return;
  var status = document.getElementById('newsletter-status');
  var input = form.querySelector('input[name="email"]');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!input.value.trim() || !input.checkValidity()) {
      input.setAttribute('aria-invalid', 'true');
      if (status) status.textContent = 'That address looks incomplete. Write it as name@example.com.';
      input.focus();
      return;
    }
    input.removeAttribute('aria-invalid');
    var email = input.value.trim();
    var subject = encodeURIComponent('Newsletter sign-up');
    var body = encodeURIComponent('Please add ' + email + ' to the AI Safety Saarland newsletter.');
    window.location.href = 'mailto:info@ais-saarland.org?subject=' + subject + '&body=' + body;
    if (status) status.textContent = 'Thanks! Your email app should open — just press send.';
  });
  input.addEventListener('input', function () {
    if (input.getAttribute('aria-invalid') && input.checkValidity()) {
      input.removeAttribute('aria-invalid');
      if (status) status.textContent = '';
    }
  });
})();
