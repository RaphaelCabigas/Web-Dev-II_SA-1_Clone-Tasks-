// Get the select tag of sort
const filter = document.getElementById("filter");

// A function that filters the items based on the selected occasion
function filterItems() {
    const shopCtr = document.querySelector(".shop-chocos");
    // Get all the choco-boxes displayed and convert to an array
    const filterShop = Array.from(document.querySelectorAll(".choco-box"));
    // Debug console.log(filterShop);
    const filterSelected = filter.value;
    // Debug console.log(filterSelected);
    filterShop.forEach(box => {
        const occasion = box.getAttribute("data-occasion");
        // if the filter selected is EMPTY which will display all items
        // or if the filter selected is equal to the box's occasion
        if (filterSelected === '' || filterSelected === occasion) {
            // display the box
            box.style.display = "grid";
        } else {
            // don't display the box
            box.style.display = "none";
        }
    });
}

// Add an eventlistener when the select change it's option
filter.addEventListener("change", filterItems);

// Get the select tag of sort
const sorter = document.getElementById("sort");

// A function that sorts the items based on the selected option
function sortItems() {
    const shopCtr = document.querySelector(".shop-chocos");
    // Get all the choco-boxes displayed and convert to an array
    const sortShop = Array.from(document.querySelectorAll(".choco-box"));
    const sortSelected = sorter.value;
    // Debug console.log(sortSelected);

    // If the option is high to low
    if (sortSelected === "high") {
        // Sort them by highest to lowest price
        sortShop.sort((box1, box2) => {
            // Get the 2 chocolate boxes's price and then convert to a float
            const price1st = parseFloat(box1.querySelector(".choco-price span").textContent);
            const price2nd = parseFloat(box2.querySelector(".choco-price span").textContent);
            // Subtract the 2ND box to the 1ST box
            // If 2ND price is greater then place it first
            // If 2ND price is lower then the 1ST box is place first
            // If the prices are the same then don't change anything
            return price2nd - price1st;
        });
        // If the option is low to high
    } else if (sortSelected === "low") {
        sortShop.sort((box1, box2) => {
            const price1st = parseFloat(box1.querySelector(".choco-price span").textContent);
            const price2nd = parseFloat(box2.querySelector(".choco-price span").textContent);
            // Subtract the 1ST box to the 2ND box
            // If 1ST price is lower then place it first
            // If 1ST price is greater then the 2nd box is place first
            // If the prices are the same then don't change anything
            return price1st - price2nd;
        });
    }

    // Then loop through each item from the array and then put it back in the shop container in a sorted way
    sortShop.forEach(box => {
        shopCtr.appendChild(box);
    });
}

// Add an eventlistener when the select change it's option
sorter.addEventListener("change", sortItems);