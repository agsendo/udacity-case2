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

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
/*function buildNav() {*/
    /* get and store all of the section elements*/
    /*function getSections() {
    sections = document.getElementsByTagName('section');
    
    console.log(sections);
    }*/

    /*create li element for each section and add to the ul*/
    /*function addSectionsToNav(sections) {
        let navbarElement = document.querySelector('#navbar__list');
        console.log(navbarElement);
        for (let i = 0; i < sections.length; i++) {
            let listItem = document.createElement('li');
            let sectionHeading = sections[i].getElementsByTagName('h2');
            listItem.innerHTML = sectionHeading.textContent;
            navbarElement.appendChild(listItem);

            console.log(listItem);
            console.log(sectionHeading.textContent);
            console.log(listItem.innerHTML);
        }
    }

    getSections();
    addSectionsToNav(sections);
}

buildNav();*/



// build the nav
function buildNav() {

    //get and store all of the headers-2 elements
    function getSectionHeaders() {
    headers = document.getElementsByTagName('h2');
    }

    //create li element for each section header and add to the ul
    function addHeadersToNav(headers) {
        let navbarElement = document.querySelector('#navbar__list');
        for (let i = 0; i < headers.length; i++) {
            let listItem = document.createElement('li');
            listItem.textContent = headers[i].textContent;
            navbarElement.appendChild(listItem);

            console.log(listItem.textContent);
        }
    }

    getSectionHeaders();
    addHeadersToNav(headers);
}

buildNav();

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active