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
