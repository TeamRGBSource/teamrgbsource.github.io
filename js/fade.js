document.addEventListener('DOMContentLoaded', function() {
    // Get all elements that will have custom fade behaviors
    const title = document.querySelector('h1');
    const projectsHeading = document.querySelector('.projects-section h2');
    const projectsText = document.querySelector('.projects-text'); // Add a span for the text
    const projectCards = document.querySelectorAll('.project-card');
    const downArrow = document.querySelector('.down-arrow');
    
    // Initial state
    title.style.opacity = 1;
    projectsHeading.style.opacity = 0.5; // Start at 50% opacity
    downArrow.style.opacity = 1; // Arrow starts fully visible
    projectCards.forEach(card => {
      card.style.opacity = 0;
    });
    
    // Handle scroll events
    window.addEventListener('scroll', function() {
      // Calculate how far down the page we've scrolled
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Title fade out - make it stay visible longer
      let titleOpacity = 1;
      // Start fading at 15% scroll (was 5%) - this delays the fade until you've scrolled further
      if (scrollPosition > windowHeight * 0.15) { 
        // Complete by 30% scroll (was 20%) - makes the fade happen over a longer distance
        titleOpacity = Math.max(0, 1 - ((scrollPosition - (windowHeight * 0.15)) / (windowHeight * 0.15))); 
      }
      
      // Projects heading fade in - keep as is
      let headingOpacity = 0.5; // Minimum opacity is 0.5 (50%)
      if (scrollPosition > windowHeight * 0.1) { // Start adding opacity at 10% scroll
        // This will range from 0 to 0.5, which we'll add to the base 0.5
        const additionalOpacity = Math.min(0.5, (scrollPosition - (windowHeight * 0.1)) / (windowHeight * 0.15)); // Complete by 25% scroll
        headingOpacity = 0.5 + additionalOpacity; // Range from 0.5 to 1.0
      }
      
      // Down arrow fade out - opposite of heading fade in
      // As heading approaches full opacity, arrow fades away
      let arrowOpacity = 1;
      if (scrollPosition > windowHeight * 0.1) {
        // This is inverse of heading's additional opacity
        arrowOpacity = Math.max(0, 1 - (scrollPosition - (windowHeight * 0.1)) / (windowHeight * 0.1));
      }
      
      // Calculate the margin adjustment for the text
      // As arrow fades out, increase right margin to keep text centered
      const marginAdjustment = -32 * (1 - arrowOpacity); // Up to 10px shift
      
      // Apply calculated opacities and position adjustments
      title.style.opacity = titleOpacity;
      projectsHeading.style.opacity = headingOpacity;
      downArrow.style.opacity = arrowOpacity;
      
      // Move the text slightly right as arrow fades
      if (projectsText) {
        projectsText.style.marginRight = `${marginAdjustment}px`;
      }
      
      // For project cards, apply staggered fade-in with smaller transition zones
      projectCards.forEach((card, index) => {
        // Each card starts fading in a bit later than the previous one, but all closer to the edge
        const cardStartScroll = windowHeight * (0.15 + (index * 0.03)); // Start at 15% plus small stagger
        const cardFadeRange = windowHeight * 0.15; // Complete over 15% of scroll distance (shorter fade)
        
        let cardOpacity = 0;
        if (scrollPosition > cardStartScroll) {
          cardOpacity = Math.min(1, (scrollPosition - cardStartScroll) / cardFadeRange);
        }
        
        card.style.opacity = cardOpacity;
      });
    });
    
    // Trigger the scroll event on page load to set initial states
    window.dispatchEvent(new Event('scroll'));
  });