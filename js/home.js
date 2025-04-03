document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const blurContainer = document.querySelector('.top-bar-holder');
    let lastScrollY = window.scrollY;
    let ticking = false;

    // Add dynamic styling for the navbar states
    const style = document.createElement('style');
    style.innerHTML = `
                      .navbar {
                        position: sticky;
                        top: 6vh;
                        z-index: 100;
                        padding: 20px 0;
                        transition: transform 0.3s ease-in-out;
                      }
                      
                      .navbar--hidden {
                        transform: translateY(-250%);
                      }
                      
                      .navbar--visible {
                        transform: translateY(0);
                      }
                      
                      .top-bar-holder {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: calc(6vh + 70px); /* Covers area from top to below navbar */
                        z-index: 99;
                        opacity: 0;
                        transition: opacity 0.3s ease, transform 0.3s ease-in-out;
                        pointer-events: none;
                      }
                      
                      .top-bar-holder--visible {
                        opacity: 1;
                      }
                      
                      .top-bar-holder--hidden {
                        transform: translateY(-100%);
                      }
                    `;
    document.head.appendChild(style);

    // Handle scrolling behavior
    const handleScroll = () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const currentScrollY = window.scrollY;
                const isScrollingDown = currentScrollY > lastScrollY;
                const isAtTop = currentScrollY < 10;

                // Update navbar classes based on scroll position and direction
                if (isScrollingDown && !isAtTop) {
                    // Hide navbar when scrolling down
                    navbar.classList.add('navbar--hidden');
                    navbar.classList.remove('navbar--visible');
                    blurContainer.classList.remove('top-bar-holder--visible');
                    blurContainer.classList.add('top-bar-holder--hidden');
                } else if (!isAtTop) {
                    // Show navbar with blur when scrolling up but not at top
                    navbar.classList.remove('navbar--hidden');
                    navbar.classList.add('navbar--visible');
                    blurContainer.classList.add('top-bar-holder--visible');
                    blurContainer.classList.remove('top-bar-holder--hidden');
                } else {
                    // Show normal navbar at top of page
                    navbar.classList.remove('navbar--hidden');
                    navbar.classList.add('navbar--visible');
                    blurContainer.classList.remove('top-bar-holder--visible');
                    blurContainer.classList.add('top-bar-holder--hidden');
                }

                lastScrollY = currentScrollY;
                ticking = false;
            });
            ticking = true;
        }
    };

    // Initialize and add event listener
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial state
});