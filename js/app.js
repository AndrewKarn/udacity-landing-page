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

const ulist = document.getElementById("navbar__list");
const containers = document.getElementsByClassName("landing__container");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
function getContainerIds(htmlObject, list = []) {
  for (container of htmlObject) {
    list.push(container.parentNode.id);
  }
  return list;
}

function constructAnchorLinks(containerIds) {
  let idx = 0;
  for (id of containerIds) {
    let section = document.getElementById(id);
    let newItem = document.createElement("li");
    newItem.innerHTML = `<button class="navbar__menu li" type="button">${id}</button>`;
    newItem.addEventListener('click', () => {
      section.scrollIntoView({
        behavior: 'smooth'
      });
    });
    ulist.appendChild(newItem);
    idx += 1;
  }
}
// This method was taught in an article btw, to give credit where due:
// https://vanillajstoolkit.com/helpers/isinviewport/
function isInViewport(element) {
  let rect = element.getBoundingClientRect();
  let html = document.documentElement;
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || html.clientHeight) &&
    rect.right <= (window.innerWidth || html.clientWidth)
  );
}
// listen for all scrolls and call the isInViewport method.
function addListenersToContainers(containerIds) {
  for (container of containerIds) {
    let section = document.getElementById(container);
    window.addEventListener(
      "scroll",
      () => {
        isInViewport(section) ? section.classList.add("your-active-class") : section.classList.remove("your-active-class");
      },
      false
    );
  }
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */
const ids = getContainerIds(containers);
constructAnchorLinks(ids);
addListenersToContainers(ids);
