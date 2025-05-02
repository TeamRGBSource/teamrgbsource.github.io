// const background = document.getElementById('background');

// document.addEventListener('mousemove', (e) => {
//   const x = (e.clientX / window.innerWidth - 0.5) * 10;
//   const y = (e.clientY / window.innerHeight - 0.5) * 10;

//   background.style.transform = `translate(calc(-10% + ${x}px), calc(-5% + ${y}px))`;
// });

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

const navLinksButton = document.querySelectorAll('.nav-links a');
const pages = document.querySelectorAll('.page');

navLinksButton.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    // Remove "active" from all nav links
    navLinksButton.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    // Get target section by link text (or use data attributes)
    const targetId = link.textContent.toLowerCase();

    // Hide all pages
    pages.forEach(page => {
      page.classList.remove('active');
    });

    // Show target page
    const targetPage = document.getElementById(targetId);
    if (targetPage) {
      targetPage.classList.add('active');
    }

    // Hide mobile navbar after navigation
    navLinks.classList.remove('show');
  });
});
