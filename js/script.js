document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  // --- Arka plan slaytları ---
  let slides = [];
  if (hero) {
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
      slides = [
        'url(/img/arka1.jpeg)',
        'url(/img/arka2.jpeg)',
        'url(/img/arka3.jpeg)'
      ];
    } else if (window.location.pathname.includes('menu.html')) {
      slides = [
        'url(/img/yemek3.jpeg)',
        'url(/img/yemek4.jpeg)',
        'url(/img/yemek6.jpeg)'
      ];
      // Menü sayfasında arka plan karartması
      hero.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
      hero.style.backgroundBlendMode = 'darken';
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
