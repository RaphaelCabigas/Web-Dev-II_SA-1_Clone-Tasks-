//-----TOGGLE MENU VISIBILITY-----//
//-----TOGGLE MENU VISIBILITY-----//

const menu = document.querySelector(".menu ul");
const menuBtn = document.querySelector(".menu-btn");
const menuTxt = document.querySelector(".menu-txt");

function toggleMenu() {
    const isOpen = menu.classList.contains("open");
    // Add the open class if menu doesn't contain open class and vice versa
    menuBtn.classList.toggle("open", !isOpen);
    menuTxt.classList.toggle("open", !isOpen);
    menu.classList.toggle("open", !isOpen);
}


// Add a click event of toggling the menu on the menu btn 
menuBtn.addEventListener("click", toggleMenu);