// Toro Waste Solutions - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
  
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileNav = document.querySelector('.mobile-nav');
  
  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileNav.classList.toggle('active');
      mobileMenuBtn.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    const mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileNav.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
      });
    });
  }

  // File Upload Display
  const fileInput = document.getElementById('photo');
  const fileNameDisplay = document.getElementById('file-name');
  
  if (fileInput && fileNameDisplay) {
    fileInput.addEventListener('change', function() {
      if (this.files && this.files[0]) {
        const fileName = this.files[0].name;
        const fileSize = (this.files[0].size / 1024 / 1024).toFixed(2);
        fileNameDisplay.textContent = `${fileName} (${fileSize} MB)`;
      } else {
        fileNameDisplay.textContent = 'JPG, PNG up to 10MB';
      }
    });
  }

  // Form Submission Handler
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId !== '#') {
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Header scroll effect (optional subtle shadow)
  const header = document.querySelector('.header');
  
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 10) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.08)';
      } else {
        header.style.boxShadow = 'none';
      }
    });
  }

});
