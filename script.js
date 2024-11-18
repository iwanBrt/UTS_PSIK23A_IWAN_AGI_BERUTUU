// Smooth scrolling
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Simple contact form validation (contoh, opsional)
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Pesan Anda telah terkirim!');
    });
  }
  