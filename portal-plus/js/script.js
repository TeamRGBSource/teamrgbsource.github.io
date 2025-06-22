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




//  gallery page
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('.gallery-modal');
    const modalImg = document.getElementById('enlarged-image');
    const closeBtn = document.querySelector('.modal-close');
    
    // Open modal when clicking on gallery items
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', function() {
            // Use flex display to center content
            modal.style.display = "flex";
            modalImg.src = this.querySelector('img').src;
            
            // Prevent body scrolling when modal is open
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close modal
    closeBtn.addEventListener('click', function() {
        closeModal();
    });
    
    // Also close when clicking outside the image
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Close on ESC key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });
    
    // Function to close modal
    function closeModal() {
        modal.style.display = "none";
        document.body.style.overflow = ''; // Restore scrolling
    }
});
