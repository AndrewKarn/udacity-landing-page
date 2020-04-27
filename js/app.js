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
 * Define Global Variables
 * 
*/

const ulist = document.getElementById('navbar__list');
const containers = document.getElementsByClassName("landing__container");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function getContainerIds(htmlObject, list=[]) {
    for (container of htmlObject) {
        list.push(container.parentNode.id);
    }
    return list;
}


function constructAnchorLinks (containerIds) {
    let list = [];
    let idx = 0;
    let buttonIds = [];
    for (id of containerIds) {
        let newItem = document.createElement("li");
        let newText = document.createTextNode(`#${id}`);
        newItem.setAttribute("id", `list-item-${idx}`);
        newItem.setAttribute("class", "navbar__menu li");
        newItem.appendChild(newText);
        // let button = `${id}-button`
        ulist.appendChild(newItem);
        idx += 1
    }
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
const ids = getContainerIds(containers)
constructAnchorLinks(ids);
// build the nav


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


