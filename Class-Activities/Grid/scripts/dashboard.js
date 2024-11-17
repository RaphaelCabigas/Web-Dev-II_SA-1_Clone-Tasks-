//-----TOGGLE MENU VISIBILITY-----//
//-----TOGGLE MENU VISIBILITY-----//

const menu = document.querySelector(".menu");
const menuBtn = document.querySelector("#menu-btn");
// Initialize the menu container to not be displayed first in the screen
menu.style.display = "none";

function toggleMenu() {
    if (menu.style.display === "none") {
        menu.style.display = "grid";
        menu.style.animation = "menuOpen 0.5s ease forwards";
    } else {
        menu.style.animation = "menuClose 0.4s ease forwards";
        setTimeout(() => {
            menu.style.display = "none";
        }, 500);
    }
}

menuBtn.addEventListener("click", toggleMenu);