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
let heightW;
const heightWRange = 0.4;
let listitems;



/*
 * Define helper functions
 *
*/
// Get and store all of the headers h2 elements
function getSectionHeaders() {
    headers = document.getElementsByTagName('h2');
}

// Get and store all of the section IDs (to use for links)
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

// Get and store all of the li elements from navbar
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




/*
 * Begin events
 *
*/
// Build menu 
buildNav();

// Scroll to section on link click
addListenersForNav();

// Set sections as active








//
//
// Checks the window's height when resized
/*function addListenerForResize() {
    window.addEventListener('resize', function () {
        heightW = window.innerHeight;
    });
}

addListenerForResize();
*/




getNavElements();
//
function checkRect(sections) {
    for (let i = 0; i < sections.length; i++) {
        let rect = sections[i].getBoundingClientRect();
        console.log(rect.top);
        /*console.log(window.innerHeight * 0.5);*/
        if ((rect.top >= 0) && (rect.top <= (window.innerHeight * 0.45)) || 
        ((rect.bottom <= window.innerHeight) && (rect.bottom > window.innerHeight * 0.4)) ||
        ((rect.top < 0) && (rect.bottom > window.innerHeight))) {
            console.log(i+1);
            setNavElementActive(listitems[i]);
        } else {setNavElementNotActive(listitems[i])}
    }
}
/*checkRect(sections);*/

function addListenerForScroll() {
    document.addEventListener('scroll', function() {
        checkRect(sections);
    });
}

addListenerForScroll();


/*
function getViewportSize() {
   let width = window.innerWidth;
   let height = window.innerHeight;
   console.log(`the width is ${width} and height is ${height}`);
}

getViewportSize();


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
*/