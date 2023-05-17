*All of the pictures used in my project come from Adobe Free Stock.
*I used the website https://www.w3schools.com for general guidance and properties of some methods



The project consists of a responsive landing page with sections.

Top navigation menu is created with JS by iterating through sections and adding li elements (with anchors) to the navbar
(happens automatically, does not depend on the number of sections)

Clicking the link in the top nav menu results in scrolling smoothly to appropriate section using the scrollIntoView() method

Current section is highlighted in the top nav menu
(by adding listener for scrolling action that checks position of sections in the viewport with getBoundingClientRect() method and setting visible section as 'active')

'Back to top' button appears when the page is scrolled below the fold (using getBoundingClientRect() method), and clicking it results in scrolling smoothly to the top of the page with scrollTo() method

Heading's (of the current section) bottom border becomes thicker when the current section is in the viewport and 'active'