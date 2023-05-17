/* Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
*/



/*
 * Define Global Variables
 *
*/
let headers;
let sections;
let sectionIds = [];
let listitems;



/*
 * Define helper functions
 *
*/
// Get and store all of the headers h2 elements
function getSectionHeaders() {
    headers = document.getElementsByTagName('h2');
}

// Get and store all of the sections' IDs (to use for links)
function getSectionIds() {
    sections = document.getElementsByTagName('section');
    for (i = 0; i < sections.length; i++) {
        sectionIds[i] = sections[i].id;
    }
}

// Create li element for each section header
// and add it to the ul with its proper link
function addHeadersToNav(headers) {
    let navbarElement = document.querySelector('#navbar-list');
    for (let i = 0; i < headers.length; i++) {
        let listItem = document.createElement('li');
        listItem.innerHTML = `<a href="#${sectionIds[i]}" class="menu-link">${headers[i].textContent}</a>`;
        navbarElement.appendChild(listItem);
    }
}

// Scrolls to the element with given ID
function scrollToSection(sectionId) {
    let element = document.getElementById(sectionId);
    element.scrollIntoView({block: 'start', behavior: 'smooth'});
}

// Get and store all of the li link elements from navbar
function getNavElements() {
    listitems = document.querySelectorAll('.navbar-menu a');
}

// Add class 'active' to navbar list item
function setNavElementActive(element) {
    element.classList.add("active");
}

// Remove class 'active' from navbar list item
function setNavElementNotActive(element) {
    element.classList.remove("active");
}

// Check the position of all sections
// Add class 'active' when section is in the viewport and remove otherwise
function checkRect(sections) {
    getNavElements();
    for (let i = 0; i < sections.length; i++) {
        let rect = sections[i].getBoundingClientRect();
        if ((rect.top >= 0) && (rect.top <= (window.innerHeight * 0.45)) || 
        ((rect.bottom <= window.innerHeight) && (rect.bottom > window.innerHeight * 0.4)) ||
        ((rect.top < 0) && (rect.bottom > window.innerHeight))) {
            setNavElementActive(listitems[i]);
        } else {setNavElementNotActive(listitems[i])}
    }
}

// Make the button visible when the displayed content is below the fold
// by checking if the first section is currently at the top of the viewport
function addListenerForBelowFold() {
    document.addEventListener('scroll', function() {
        let section1 = document.querySelector('#section1');
        let btn = document.querySelector('#btn-top');
        let rectS = section1.getBoundingClientRect();
        if (rectS.top < 100) {
            btn.style.visibility = "visible";
        } else {
            btn.style.visibility = "hidden";
        }
    })
}

// Scroll smoothly to the top when the button is clicked
function addlistenerScrollTop() {
    let btn = document.querySelector('#btn-top');
    btn.addEventListener('click', function() {
        window.scrollTo({ top:0, behavior: 'smooth' });
    })
}



/*
 * Define main functions
 *
*/
// Build the nav
function buildNav() {
    getSectionHeaders();
    getSectionIds();
    addHeadersToNav(headers);
}

// Scroll to anchor ID using scrollTo event
// Add listener for each nav link
function addListenersForNav() {
    let navLinks = document.querySelectorAll('.menu-link');
    for (let navLink of navLinks) {
        let hrefValue = navLink.getAttribute("href");
        hrefValue = hrefValue.slice(1); //removes the # from the link
        navLink.addEventListener('click', function (event) {
            event.preventDefault();
            scrollToSection(`${hrefValue}`);
        });
    }
}

// Add class 'active' to section when near top of viewport
function addListenerForScroll() {
    sections = document.getElementsByTagName('section');
    document.addEventListener('scroll', function() {
        checkRect(sections);
    });
}

// Show the button when below the fold and scroll to the top when clicked
function scrollToTopButton() {
    addListenerForBelowFold();
    addlistenerScrollTop();
}



/*
 * Begin events
 *
*/
// Build menu 
buildNav();

// Scroll to section on link click
addListenersForNav();

// Set sections as active
addListenerForScroll();

// Scroll to the top button
scrollToTopButton();