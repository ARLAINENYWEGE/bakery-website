// Arlaine Pastries - Main JavaScript

// ========================
// Active nav link highlight
// ========================
document.addEventListener('DOMContentLoaded', function () {
  const currentPage = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(function (link) {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  // Load dark mode preference
  if (localStorage.getItem('darkMode') === 'on') {
    document.body.classList.add('dark-mode');
    const btn = document.getElementById('darkModeToggle');
    if (btn) btn.textContent = 'Light Mode';
  }
});

// ========================
// Dark Mode Toggle (JS Feature #1)
// ========================
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const btn = document.getElementById('darkModeToggle');

  if (document.body.classList.contains('dark-mode')) {
    btn.textContent = 'Light Mode';
    localStorage.setItem('darkMode', 'on');
  } else {
    btn.textContent = 'Dark Mode';
    localStorage.setItem('darkMode', 'off');
  }
}

// ========================
// Product Filter (JS Feature #2)
// ========================
function filterProducts(category) {
  const items = document.querySelectorAll('.product-item');
  const buttons = document.querySelectorAll('.shop-filter-btn');

  // Update active button
  buttons.forEach(function (btn) {
    btn.classList.remove('active');
  });

  event.target.classList.add('active');

  // Show or hide products
  items.forEach(function (item) {
    if (category === 'all' || item.getAttribute('data-category') === category) {
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
    }
  });
}

// ========================
// Contact Form Validation (JS Feature #3)
// ========================
function validateForm() {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  let valid = true;

  // Clear previous errors
  document.querySelectorAll('.error-msg').forEach(function (el) {
    el.textContent = '';
  });

  if (name && name.value.trim() === '') {
    document.getElementById('nameError').textContent = 'Please enter your name.';
    valid = false;
  }

  if (email && !/^\S+@\S+\.\S+$/.test(email.value.trim())) {
    document.getElementById('emailError').textContent = 'Please enter a valid email address.';
    valid = false;
  }

  if (message && message.value.trim().length < 10) {
    document.getElementById('messageError').textContent = 'Message must be at least 10 characters.';
    valid = false;
  }

  if (valid) {
    document.getElementById('formSuccess').style.display = 'block';
    document.getElementById('contactForm').reset();
  }

  return false; // prevent real form submission
}

console.log('Arlaine Pastries website loaded successfully.');