//-----TOGGLE MENU VISIBILITY-----//
//-----TOGGLE MENU VISIBILITY-----//

const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const menuTxt = document.querySelector(".menu-txt");
const menuLinks = document.querySelectorAll(".menu ul li a ");

function toggleMenu() {
    const isOpen = menu.classList.contains("open");
    // Add the open class if menu doesn't contain open class and vice versa
    menuBtn.classList.toggle("open", !isOpen);
    menuTxt.classList.toggle("open", !isOpen);
    // Loops through each link in the returned menuLinks arrray 
    menuLinks.forEach((link, index) => {
        // Check if menu isOpen make the animation reverse else proceed to the original animation 
        // For the animation delay we multiply the corresponding link index by 0.1 
        const checkDelay = isOpen ? (menuLinks.length - index - 1) * 0.1 : index * 0.1;
        // Check if menu isOpen choose the menuClose animation else menuOpen
        const menuAni = isOpen ? "menuClose" : "menuOpen";
        // Check if menu isOpen set opacity to 1 else to 0
        link.style.opacity = isOpen ? "1" : "0";
        // Use backticks to include the corresponding menuAnimation and delay as well
        link.style.animation = `${menuAni} 0.8s ease forwards`;
        link.style.animationDelay = `${checkDelay}s`;
    });
    if (isOpen) {
        setTimeout(() => {
            menu.classList.remove("open");
        }, 800);
    } else {
        menu.classList.add("open");
    }
}


// Add a click event of toggling the menu on the menu btn 
menuBtn.addEventListener("click", toggleMenu);
