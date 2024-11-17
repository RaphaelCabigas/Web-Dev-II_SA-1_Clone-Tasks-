//-----TOGGLE MENU VISIBILITY-----//
//-----TOGGLE MENU VISIBILITY-----//

const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");

function toggleMenu() {
    if (menu.classList.contains("open")) {
        menu.style.animation = "menuClose 0.5s ease forwards";
        setTimeout(() => {
            menu.classList.remove("open");
        }, 500);
    } else {
        menu.style.animation = "menuOpen 0.5s ease forwards";
        menu.classList.add("open");
    }
}

// Add a click event of toggling the menu on the menu btn 
menuBtn.addEventListener("click", toggleMenu);
