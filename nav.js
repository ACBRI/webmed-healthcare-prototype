// Webmed Prototype — Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  var hb = document.querySelector('.hamburger');
  var sb = document.querySelector('.sidebar');
  if (!hb || !sb) return;
  hb.addEventListener('click', function(e) {
    e.preventDefault();
    sb.classList.toggle('open');
    document.body.classList.toggle('sidebar-open');
  });
  document.addEventListener('click', function(e) {
    if (sb.classList.contains('open') && !sb.contains(e.target) && !hb.contains(e.target)) {
      sb.classList.remove('open');
      document.body.classList.remove('sidebar-open');
    }
  });
});
