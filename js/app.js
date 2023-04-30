/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
let headers;
let sections;
let sectionIds = [];
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


//get and store all of the headers h2 elements
function getSectionHeaders() {
    headers = document.getElementsByTagName('h2');
}

//get and store all of the section IDs (to use for links)
function getSectionIds() {
    sections = document.getElementsByTagName('section');
    for (i = 0; i < sections.length; i++) {
        sectionIds[i] = sections[i].id;
    }
}

//create li element for each section header
//and add it to the ul with its proper link
function addHeadersToNav(headers) {
    let navbarElement = document.querySelector('#navbar__list');
    for (let i = 0; i < headers.length; i++) {
        let listItem = document.createElement('li');
        listItem.innerHTML = '<a href="#'+sectionIds[i]+'" class="menu__link">'+headers[i].textContent+'</a>';
        navbarElement.appendChild(listItem);
    }
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


// build the nav
function buildNav() {
    getSectionHeaders();
    getSectionIds();
    addHeadersToNav(headers);
}


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event




/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNav();
// Scroll to section on link click

// Set sections as active