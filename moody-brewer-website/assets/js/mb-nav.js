(function() {
  function updateNavbar() {
    var nb = document.querySelector('.nav-bar .navbar');
    if (!nb) return;
    if (window.scrollY > 10) nb.classList.add('blurred');
    else nb.classList.remove('blurred');
  }
  window.addEventListener('scroll', updateNavbar, { passive: true });
  document.addEventListener('DOMContentLoaded', updateNavbar);
  updateNavbar();

  // Improve mobile nav UX: dim background, prevent scroll, smoother closing
  document.addEventListener('DOMContentLoaded', function() {
    var $collapse = window.jQuery ? window.jQuery('#navbarCollapse') : null;
    if ($collapse && $collapse.length) {
      // Allow Esc to close the menu
      document.addEventListener('keyup', function(e) {
        if (e.key === 'Escape') {
          $collapse.collapse('hide');
        }
      });
    }
  });
})();
