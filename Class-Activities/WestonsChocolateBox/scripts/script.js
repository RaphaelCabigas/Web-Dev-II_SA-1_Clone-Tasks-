//-----TOGGLE MENU VISIBILITY-----//
//-----TOGGLE MENU VISIBILITY-----//

const menu = document.querySelector(".menu");
const menuBtn = document.querySelector("#menu-btn");
const menuTxt = document.querySelector(".menu-txt");
const menuLinks = document.querySelectorAll(".menu ul li a ");

function toggleMenu() {
    // If account or basket is open then close it
    if (account.classList.contains("open")) {
        // Apply the animation  to the account and remove the open class
        account.style.animation = "accountClose 0.5s ease forwards";
        setTimeout(() => {
            account.classList.remove("open");
        }, 500);
    }

    if (basket.classList.contains("open")) {
        closeBasket();
    }

    if (search.classList.contains("open")) {
        search.style.animation = "fadeOut 0.5s ease forwards";
        setTimeout(() => {
            search.classList.remove("open");
        }, 500);
    }

    const isOpen = menu.classList.contains("open");
    // Add the open class if the menu isn't open and vice versa
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
        link.style.animation = `${menuAni} 0.5s ease forwards`;
        link.style.animationDelay = `${checkDelay}s`;
    });
    // Checks if menu is open
    if (isOpen) {
        if (document.body.contains(overlay)) {
            overlay.style.animation = "fadeOut 0.5s ease forwards";
            document.body.removeChild(overlay);
        }
        // A delay of 800ms before removing the open class having the time for tha animation to finish
        setTimeout(() => {
            menu.classList.remove("open");
        }, 800);
    } else {
        menu.classList.add("open");
        if (!document.body.contains(overlay)) {
            document.body.appendChild(overlay);
            overlay.style.animation = "fadeIn 0.5s ease forwards";
        }
    }
}

// Add a click event of toggling the menu on the menu btn 
menuBtn.addEventListener("click", toggleMenu);

//--OVERLAY--//
const overlay = document.createElement("div");
overlay.className = "overlay";

//-----TOGGLE ACCOUNT-----//
//-----TOGGLE ACCOUNT-----//
const account = document.querySelector(".account");
const accountBtn = document.querySelector("#account-btn");
function toggleAccount() {
    // Checks if menu or the basket is open then close them
    if (menu.classList.contains("open")) {
        toggleMenu();
    }

    // If basket is open then close it
    if (basket.classList.contains("open")) {
        basket.style.animation = "basketClose 0.5s ease forwards";
        setTimeout(() => {
            basket.classList.remove("open");
        }, 500);
    }

    // If search is open then close it
    if (search.classList.contains("open")) {
        search.style.animation = "fadeOut 0.5s ease forwards";
        setTimeout(() => {
            search.classList.remove("open");
        }, 500);
    }
    // If account is open then close it
    if (account.classList.contains("open")) {
        overlay.style.animation = "fadeOut 0.5s ease forwards";
        account.style.animation = "accountClose 0.5s ease forwards";
        // A delay of 500ms and remove the open class and check if the document has the overlay
        setTimeout(() => {
            account.classList.remove("open");
            if (document.body.contains(overlay)) {
                document.body.removeChild(overlay);
            }
        }, 500);
    } else {    // If the account is not open then add the class and check if overlay is in the document 
        // apply animations for overlay and account
        account.classList.add("open");
        if (!document.body.contains(overlay)) {
            document.body.appendChild(overlay);
        }
        overlay.style.animation = "fadeIn 0.5s ease forwards";
        account.style.animation = "accountOpen 0.5s ease forwards";
    }
}
// Add a click event of toggling the account on the account btn 
accountBtn.addEventListener("click", toggleAccount);


//-----TOGGLE BASKET-----//
const basket = document.querySelector(".basket");
const basketBtn = document.querySelector("#basket-btn");
const basketCloseBtn = document.querySelector("#basket-close-btn");
//--OPEN BASKET--//
function openBasket() {
    // Checks if the menu is open then close it
    if (menu.classList.contains("open")) {
        toggleMenu();
    }
    // Checks if the account is open and the basket is not open
    if (account.classList.contains("open") && !basket.classList.contains("open")) {
        // Apply the animation  to the account and remove the open class
        account.style.animation = "accountClose 0.5s ease forwards";
        setTimeout(() => {
            account.classList.remove("open");
        }, 500);
    }

    if (search.classList.contains("open") && !basket.classList.contains("open")) {
        // Apply the animation  to the account and remove the open class
        search.style.animation = "fadeOut 0.5s ease forwards";
        setTimeout(() => {
            search.classList.remove("open");
        }, 500);
    }

    // If the basket is not open
    if (!basket.classList.contains("open")) {
        // Checks if the overlay is in the document then remove it
        if (!document.body.contains(overlay)) {
            document.body.appendChild(overlay);
        }
        // then add the open class and the following animations for basket and overlay
        basket.classList.add("open");
        basket.style.animation = "basketOpen 0.5s ease forwards";
        overlay.style.animation = "fadeIn 0.5s ease forwards";
    }
}
//--CLOSE BASKET--//
function closeBasket() {
    // If basket is open, apply the animations for the basket and overlay
    if (basket.classList.contains("open")) {
        basket.style.animation = "basketClose 0.5s ease forwards";
        overlay.style.animation = "fadeOut 0.5s ease forwards";
        // A delay of 500ms and remove the open class and check if the document has the overlay
        setTimeout(() => {
            if (document.body.contains(overlay)) {
                document.body.removeChild(overlay);
            }
            basket.classList.remove("open");
        }, 500);
    }
}

// Add an event listener when clicking the basket button and the basket close button
basketBtn.addEventListener("click", openBasket);
basketCloseBtn.addEventListener("click", closeBasket);


//-----TOGGLE ACCOUNT-----//
//-----TOGGLE ACCOUNT-----//
const search = document.querySelector(".search");
const searchBtn = document.querySelector("#search-btn");
function toggleSearch() {
    // Checks if menu or the basket is open then close them
    if (menu.classList.contains("open")) {
        toggleMenu();
    }

    if (account.classList.contains("open")) {
        account.style.animation = "accountClose 0.5s ease forwards";
        setTimeout(() => {
            account.classList.remove("open");
        }, 500);
    }

    // If basket is open then close it
    if (basket.classList.contains("open")) {
        basket.style.animation = "basketClose 0.5s ease forwards";
        setTimeout(() => {
            basket.classList.remove("open");
        }, 500);
    }

    // If search is open then close it
    if (search.classList.contains("open")) {
        overlay.style.animation = "fadeOut 0.5s ease forwards";
        search.style.animation = "fadeOut 0.5s ease forwards";
        // A delay of 500ms and remove the open class and check if the document has the overlay
        setTimeout(() => {
            search.classList.remove("open");
            if (document.body.contains(overlay)) {
                document.body.removeChild(overlay);
            }
        }, 500);
    } else {    // If the search is not open then add the class and check if overlay is in the document 
        // apply animations for overlay and search
        search.classList.add("open");
        if (!document.body.contains(overlay)) {
            document.body.appendChild(overlay);
        }
        overlay.style.animation = "fadeIn 0.5s ease forwards";
        search.style.animation = "fadeIn 0.5s ease forwards";
    }
}
// Add a click event of toggling the search on the search btn 
searchBtn.addEventListener("click", toggleSearch);

//-----OVERLAY CLOSE-----//
//-----OVERLAY CLOSE-----//
overlay.addEventListener("click", () => {
    // If I click the overlay and the basket or the account is open then close it
    if (basket.classList.contains("open")) {
        closeBasket();
    }
    if (account.classList.contains("open")) {
        toggleAccount();
    }
    if (search.classList.contains("open")) {
        toggleSearch();
    }

    if (menu.classList.contains("open")) {
        toggleMenu();
    }
});