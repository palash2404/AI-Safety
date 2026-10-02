// Mobile menu
(function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;

  function setOpen(open) {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  toggle.addEventListener('click', function () {
    setOpen(!nav.classList.contains('open'));
  });
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { setOpen(false); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });
})();

// Newsletter sign-up
// There is no newsletter service connected yet, so for now the form opens an
// email to info@ais-saarland.org with the address filled in. When a service
// (e.g. Brevo, MailerLite, Buttondown) is set up, replace this with its form action.
(function () {
  var form = document.getElementById('newsletter');
  if (!form) return;
  var status = document.getElementById('newsletter-status');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var email = form.email.value.trim();
    if (!email) return;
    var subject = encodeURIComponent('Newsletter sign-up');
    var body = encodeURIComponent('Please add ' + email + ' to the AI Safety Saarland newsletter.');
    window.location.href = 'mailto:info@ais-saarland.org?subject=' + subject + '&body=' + body;
    if (status) status.textContent = 'Thanks! Your email app should open — just press send.';
  });
})();

// Header shadow once the page has scrolled
(function () {
  var header = document.querySelector('.site-header');
  if (!header) return;
  function update() { header.classList.toggle('scrolled', window.scrollY > 8); }
  update();
  window.addEventListener('scroll', update, { passive: true });
})();

// Scroll reveals: cards fade up as they enter the screen, one after another.
// Skipped entirely for people who prefer reduced motion or on old browsers,
// and never applied to things already on screen when the page loads.
(function () {
  if (!('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var groups = document.querySelectorAll(
    '.program-grid, .contributor-grid, .project-grid, .recap-grid, .team-grid, .why-grid, .threat-grid, .audience-grid, .offer-grid, .event-list, .initiative-list, .schedule-list'
  );
  var items = [];
  groups.forEach(function (group) {
    Array.prototype.forEach.call(group.children, function (el, i) {
      if (el.getBoundingClientRect().top < window.innerHeight) return; // already visible
      el.style.setProperty('--i', Math.min(i, 5));
      el.classList.add('reveal');
      items.push(el);
    });
  });
  if (!items.length) return;

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -60px 0px' });
  items.forEach(function (el) { io.observe(el); });

  // Safety net: jumping to an anchor or a slow device should never leave things hidden
  window.addEventListener('load', function () {
    setTimeout(function () {
      items.forEach(function (el) {
        if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('in');
      });
    }, 400);
  });
})();
