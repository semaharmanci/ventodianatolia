document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

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
