/*==================== Toggle Icon Navbar ====================*/
// Selects the menu icon and the navbar elements
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


// This allows the menu to open and close when the menu icon is clicked
menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark'); // Changes the icon to an "X" when active
    navbar.classList.toggle('active');    // Activates or deactivates the navbar menu
};

/*==================== Scroll Section Active Link ====================*/
// Selects all sections and navigation links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Highlights the appropriate navigation link based on the section currently in view
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;         // Current scroll position
        let offset = sec.offsetTop - 150; // Adjusts the offset to activate the link earlier
        let height = sec.offsetHeight;    // Height of the current section
        let id = sec.getAttribute('id');  // ID of the section

        // If the current scroll position is within the section boundaries
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active'); // Removes "active" class from all links
                // Adds the "active" class to the navigation link that matches the section ID
                document.querySelector(`header nav a[href*='${id}']`).classList.add('active');
            });
        }
    });
};

/*==================== Sticky Navbar ====================*/
// Adds a "sticky" class to the header when the scroll position is greater than 100px
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);


/*=============== Scroll Reveal ===============*/
// Initializes the ScrollReveal library with specific animation settings
ScrollReveal({
    distance: '80px',    // Distance elements move during the animation
    duration: 2000,      // Duration of the animation in milliseconds
    delay: 200,          // Delay before the animation starts
});

// Reveals elements with different origins (directions) as they come into view
ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .projects-container, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });
