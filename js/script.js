 document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  // --- Arka plan slaytları ---
  let slides = [];
  if (hero) {
    if (window.location.pathname.includes('index.html') || 
    window.location.pathname === '/' || 
    window.location.pathname === '/ventodianatolia/' || 
    window.location.pathname === '/ventodianatolia') {
  slides = [
    'url(/ventodianatolia/img/arka1.jpeg)',
    'url(/ventodianatolia/img/arka2.jpeg)',
    'url(/ventodianatolia/img/arka3.jpeg)'
  ];
} else if (window.location.pathname.includes('menu.html')) {
  slides = [
    'url(/ventodianatolia/img/yemek3.jpeg)',
    'url(/ventodianatolia/img/yemek4.jpeg)',
    'url(/ventodianatolia/img/yemek6.jpeg)'
  ];
  // ...
}
    if (slides.length > 0) {
      let currentIndex = 0;
      hero.style.backgroundImage = slides[currentIndex];

      setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        hero.style.transition = 'background-image 1s ease-in-out';
        hero.style.backgroundImage = slides[currentIndex];
      }, 6000);
    }
  }

  // --- Menü sayfası PDF butonu ---
  if (window.location.pathname.includes('menu.html')) {
    const openBtn = document.getElementById('openPdfBtn');
    if (openBtn) {
      openBtn.addEventListener('click', () => {
        window.open('img/Anatolia.pdf', '_blank');
      });
    }
  }

  // --- Hamburger menü toggle ---
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      navToggle.classList.toggle('active');
    });
  }
});
