// Arlaine Pastries - Main JavaScript

// Highlight the active page in the navbar
document.addEventListener('DOMContentLoaded', function () {
  const currentPage = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(function (link) {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
});

// Simple console message (placeholder for future interactivity)
console.log('Arlaine Pastries website loaded successfully.');