//-----CHOCOLATES USED FOR THE WEBSITE-----//
//-----CHOCOLATES USED FOR THE WEBSITE-----//

// An array that stores each chocolate with its image source, alt, name, and price
const chocoData = [
    {
        // Stores the file link for the images
        source: "./images/strawberry.png",
        // Stores the image's alt text if image is not loaded
        imgAlt: "A 3x3 strawberry chocolate with strawberries in the background",
        // Stores the chocolate's name
        name: "Strawberry Deluxe (10pcs)",
        // Stores what type of chocolate occasion is it
        occasion: "westons",
        // Stores the chocolate's price
        price: "15.00"
    },

    {
        source: "./images/matcha.png",
        imgAlt: "A matcha cube chocolate",
        name: "Matcha Cubes (5pcs)",
        occasion: "westons",
        price: "10.00"
    },

    {
        source: "./images/nuts.png",
        imgAlt: "A bunch of assorted chocolate cupcakes covered with different nuts",
        name: "Assorted Choconuts (20pcs)",
        occasion: "westons",
        price: "20.00"
    },

    {
        source: "./images/flavors.png",
        imgAlt: "A bunch of assorted chocolate cupcakes with different flavors",
        name: "Assorted Chococups (15pcs)",
        occasion: "westons",
        price: "25.00"
    },

    {
        source: "./images/balls.png",
        imgAlt: "A bunch of chocolate balls with different flavors",
        name: "Rumble Box",
        occasion: "westons",
        price: "30.00"
    },

    {
        source: "./images/ube.jpg",
        imgAlt: "A bunch of ube purple hexagon chocolates",
        name: "Ube Hex (20pcs)",
        occasion: "westons",
        price: "10.00"
    },

    {
        source: "./images/blueberry.jpg",
        imgAlt: "A bunch of blue blueberry circle chocolates",
        name: "Blueberry Circles (20pcs)",
        occasion: "westons",
        price: "15.00"
    },

    {
        source: "./images/christmas tree.jpg",
        imgAlt: "A large christmas tree chocolate with tiny trees in the background",
        name: "Christmas Tree (5pcs)",
        occasion: "christmas",
        price: "30.00"
    },

    {
        source: "./images/snowman.jpg",
        imgAlt: "A large snowman chocolate with pinecones in the background",
        name: "White Snowman (5pcs)",
        occasion: "christmas",
        price: "30.00"
    },

    {
        source: "./images/snowmen.jpg",
        imgAlt: "A bunch of tiny snowmen chocolates",
        name: "Tiny Snowmen (10pcs)",
        occasion: "christmas",
        price: "20.00"
    },

    {
        source: "./images/christmas pack.jpg",
        imgAlt: "A christmas-themed chocolate pack",
        name: "Christmas Chocolate Pack",
        occasion: "christmas",
        price: "50.00"
    },

    {
        source: "./images/snowflakes.jpg",
        imgAlt: "A bunch of powdered snowflake chocolates",
        name: "Snowflakes (30pcs)",
        occasion: "christmas",
        price: "15.00"
    },

    {
        source: "./images/assorted christmas.jpg",
        imgAlt: "A bunch of christmas themed chocolates",
        name: "Assorted Christmas (20pcs)",
        occasion: "christmas",
        price: "20.00"
    },

    {
        source: "./images/rose.jpg",
        imgAlt: "A large rose chocolate",
        name: "Roses (10pcs)",
        occasion: "valentines",
        price: "20.00"
    },

    {
        source: "./images/valentine pack.jpg",
        imgAlt: "A valentine-themed chocolate pack",
        name: "Valentine Chocolate Pack",
        occasion: "valentines",
        price: "50.00"
    },

    {
        source: "./images/easter pack.jpg",
        imgAlt: "A easter-themed chocolate pack",
        name: "Easter Chocolate Pack ",
        occasion: "easter",
        price: "50.00"
    },

    {
        source: "./images/flowers.jpg",
        imgAlt: "A flower chocolate with leaves and small easter eggs",
        name: "Flowers (10pcs)",
        occasion: "easter",
        price: "15.00"
    },

    {
        source: "./images/bunny.jpg",
        imgAlt: "A large bunny chocolate",
        name: "Bunny (10pcs)",
        occasion: "easter",
        price: "25.00"
    },

    {
        source: "./images/flavored easter eggs.jpg",
        imgAlt: "A bunch of striped easter eggs",
        name: "Easter Eggs Stripes (15pcs)",
        occasion: "easter",
        price: "30.00"
    },

    {
        source: "./images/easter eggs.jpg",
        imgAlt: "A bunch of easter egg chocolates",
        name: "Easter Eggs (15pcs)",
        occasion: "easter",
        price: "20.00"
    },

    {
        source: "./images/tinybears.jpg",
        imgAlt: "A bunch of tiny teddy bear chocolates",
        name: "Tiny Bears (10pcs)",
        occasion: "valentines",
        price: "20.00"
    },

    {
        source: "./images/teddy bear.jpg",
        imgAlt: "A large teddy bear chocolate",
        name: "Teddy Bear (5pcs)",
        occasion: "valentines",
        price: "30.00"
    },
];

const shop = document.querySelector(".shop-chocos");
const basketContent = document.querySelector(".basket-content");
const basketNotifs = document.querySelector(".basket-notifs");
// create an array to calculate the basket's item's prices, quantities, 
// and check if the user wants to add the item that is already in the basket
let totalItems = [];

// A function to check the total items array
function checkBasket() {
    // Checks if the total items array is empty
    if (totalItems.length === 0) {
        // Display that the basket is empty
        basketContent.innerHTML = `<div class="basket-msg">
        <p>Your basket is currently empty!</p>
        <a href="shop.html">Visit our shop</a>
        </div>`;
    } else {
        // If there's an item in the array remove the empty message
        if (document.querySelector(".basket-msg")) {
            document.querySelector(".basket-msg").remove();
        }
    }
}

// A function for what kind of popup will display on screen 
function displayPopup(msg) {
    // create a notif button with its class and animation 
    const notif = document.createElement("button");
    notif.className = "basket-popup";
    notif.style.animation = "popUp 0.5s ease forwards";
    // Add the necessary message html structure
    notif.innerHTML = msg;
    // Add an event listener for opening the basket
    notif.addEventListener("click", openBasket);

    // Prepend adds it before the current cart-pop displayed 
    // meaning it will be on top of the current popup
    basketNotifs.prepend(notif);
    // delay for 3s and then add the animation
    setTimeout(() => {
        notif.style.animation = "popDown 0.7s ease forwards";
        // delay 700ms and remove the notif from the notifs container
        setTimeout(() => {
            basketNotifs.removeChild(notif);
        }, 700);
    }, 3000);

}

// A function for calculating the total for all item's price
function finalizeTotal() {
    // A mutable variable to contanstly update the price
    let totalPrice = 0;
    // Loops through each item's price convert to a float and add it to the variable 
    totalItems.forEach(item => {
        totalPrice += parseFloat(item.price);
    });
    // Update the basket's total price an then add the calculated total to it
    const totalTxt = document.querySelector(".total-price");
    totalTxt.textContent = `${totalPrice.toFixed(2)} AED`;
}

// A function to update the basket's quantity inside and outside
function displayQuantity() {
    // Get the btn's quantity which is outside on top of the basket button
    const basketBtnQuantity = document.querySelector("#basket-btn span");
    // Get the basket's quantity which is inside the basket
    const basketInQuantity = document.querySelector(".basket-qty");

    // A mutable variable to contanstly update the  total quantity
    let totalQty = 0;
    // Loop through each item's quantity and then add it to the variable
    totalItems.forEach(item => {
        totalQty += item.qty;
    });

    // Change the basket's button quantity to the total quantity 
    // same goes for the basket's inside quantity 
    basketBtnQuantity.textContent = totalQty;
    basketInQuantity.textContent = `${totalQty} item/s`;
}

// A function for updating the basket price based on updated quantity in the basket
function updateQtyPrice(basketP, basketQty, itemNm, itemP) {
    // Update the total items array with its quantity
    totalItems.forEach(item => {
        if (item.name === itemNm) {
            // Update the total items based on item's quantity to basket's item quantity
            item.qty = basketQty;
            item.price = itemP * basketQty;
        }
    });
    // Replace the basket's item's price 
    // by multiplying the basket's item quantity by the shop's item's price 
    basketP.textContent = (basketQty * itemP).toFixed(2);

    // Display the updated basket quantity and finalize the total price
    displayQuantity();
    finalizeTotal();
}

// A function for updating the basket's content and it's items
// i is the basket Item
// n is the shop's item name
// p is the shop's item price
function updateBasket(i, n, p) {
    // Get the basket item's remove button
    const removeBtn = i.querySelector(".remove-btn");
    // Add event listener to the remove button
    removeBtn.addEventListener("click", () => {
        // Remove the basket item from the basket
        i.remove();
        // Loops through each array item
        totalItems.forEach((item, i) => {
            // Checks if the array's item name is the same with the shop's item name
            if (item.name === n) {
                // Use splice to remove the item
                // i is the item's current index location
                // Deletes only 1 item which is the item itself
                totalItems.splice(i, 1);
            }
        });

        // Display the updated basket quantity and finalize the total price
        // and check the basket
        displayQuantity();
        finalizeTotal();
        checkBasket();
    });

    // Get the basket item's price, quantity, and its minus and plus buttons
    const basketPrice = i.querySelector(".item-price span");
    const basketQuantity = i.querySelector(".quantity-number");
    const minusBtn = i.querySelector(".minus");
    const addBtn = i.querySelector(".plus");

    // Adds an eventlistener to input quantity and convert it's value to integer
    basketQuantity.addEventListener("input", () => {
        let quantityInt = parseInt(basketQuantity.value);
        // if value is less than 1 make the quantity's value to 1 
        if (quantityInt < 1) {
            basketQuantity.value = 1;
        }
        // if its greater than 100 set value to 100
        else if (quantityInt > 100) {
            basketQuantity.value = 100;
        }
    });

    // Adds an eventlistener when focusing out the input
    basketQuantity.addEventListener("blur", () => {
        let quantityInt = parseInt(basketQuantity.value);
        // check if the value returned is a valid number or less than 1
        if (isNaN(quantityInt) || quantityInt < 1) {
            basketQuantity.value = 1;
        }
        // then update the basket's quantity and price based on the itemname
        updateQtyPrice(basketPrice, parseInt(basketQuantity.value), n, p);
    });

    // Add an eventlistener when clicking the minus and the add button 
    minusBtn.addEventListener("click", () => {
        let quantityInt = parseInt(basketQuantity.value);
        // if its greater than 1 allow it to subtract
        if (quantityInt > 1) {
            basketQuantity.value = quantityInt - 1;
        }
        // then update the price based on updated basket item quantity
        updateQtyPrice(basketPrice, parseInt(basketQuantity.value), n, p);
    });

    addBtn.addEventListener("click", () => {
        let quantityInt = parseInt(basketQuantity.value);
        // if its greater than 1 allow it to add
        if (quantityInt < 100) {
            basketQuantity.value = quantityInt + 1;
        }
        // then update the price based on updated basket item quantity
        updateQtyPrice(basketPrice, parseInt(basketQuantity.value), n, p);
    });
}

function addtoBasket(n, p, q, src, alt, o) {
    let findItem = false;
    totalItems.forEach(item => {
        if (item.name === n) {
            item.qty = item.qty + qty;
            item.price = (item.price * qty).toFixed(2);
            findItem = true;
        }
    })

    if (!findItem) {
        // Add the shop's item name, multiply the item price by the quantity 
        // and fixed by 2 decimal points and its quantity value to the total items array
        totalItems.push({
            name: n,
            price: (p * q).toFixed(2),
            qty: q,
            imgSrc: src,
            imgAlt: alt,
            occasion: o,
        });
    }

    // Create the basket-item element and add the necessary html struture for it
    const basketItem = document.createElement("div");
    basketItem.className = "basket-item";
    basketItem.setAttribute("data-occasion", o);
    console.log(basketItem.getAttribute("data-occasion"));
    // Put the corresponding values same as with the shop one
    basketItem.innerHTML = `
                <div class="item-img">
                    <img src=${src} alt=${alt}>
                    <button class="remove-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
                            viewBox="0 0 32 32" fill="#161212">
                            <path
                                d="M25.372,23.279c-2.507-1.79-4.909-3.792-7.238-6.001c2.602-2.673,5.117-5.613,7.566-8.878 c0.497-0.663,0.362-1.604-0.3-2.101c-0.664-0.495-1.603-0.362-2.101,0.3c-2.366,3.155-4.792,5.993-7.3,8.57 c-2.507-2.577-4.934-5.415-7.3-8.57C8.203,5.938,7.264,5.805,6.6,6.3C5.938,6.797,5.803,7.737,6.3,8.4 c2.449,3.265,4.964,6.205,7.567,8.878c-2.329,2.209-4.731,4.211-7.238,6.001c-0.674,0.481-0.83,1.418-0.349,2.093 C6.572,25.782,7.033,26,7.501,26c0.302,0,0.606-0.091,0.871-0.279c2.646-1.89,5.177-4.003,7.628-6.333 c2.451,2.331,4.982,4.443,7.628,6.333C23.893,25.909,24.197,26,24.499,26c0.468,0,0.929-0.219,1.222-0.628 C26.202,24.697,26.046,23.761,25.372,23.279z">
                            </path>
                        </svg>
                    </button>
                </div>
                <div>
                    <p class="item-name">${n}</p>
                    <p class="item-price">Subtotal: <span>${(p * q).toFixed(2)}</span> AED</p>
                    <div class="item-quantity">
                        <button class="minus" aria-label="Decrease quantity">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="#161212"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect x="6" y="17" width="2" height="19" rx="1" transform="rotate(-90 6 17)" />
                            </svg>
                        </button>
                        <label for="qty" class="quantity-label">Quantity</label>
                        <input type="number" value="${q}" name="qty" id="qty" class="quantity-number">
                        <button class="plus" aria-label="Increase quantity">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="#161212"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect x="6" y="17" width="2" height="19" rx="1" transform="rotate(-90 6 17)" />
                                <rect x="14.5" y="6.5" width="2" height="19" rx="1" />
                            </svg>
                        </button>
                    </div>
                </div>`;
    // Add the basket item component inside the basket
    basketContent.appendChild(basketItem);

    // Display the corresponding message
    displayPopup(`<h4>${n}</h4>
                    <p>Current Quantity: ${q}</p>
                    <p>Subtotal Price: ${(p * q).toFixed(2)} AED</p>
                    <p>Check Your Basket</p>`);

    // check the basket's status
    checkBasket();

    // Update the basket
    updateBasket(basketItem, n, p);
    // Display the updated basket quantity and finalize the total price
    displayQuantity();
    finalizeTotal();
}

// A function for displaying the chocolates and handling putting items to the basket
function displayChocos() {
    // Checks if the location is the shop.html then display all the chocolates 
    // if the location is other than the shop display only the first 3 chocolates slice from the start until the 3rd
    const chocoOnly = (window.location.pathname === '/Class-Activities/WestonsChocolateBox/shop.html') ? chocoData : chocoData.slice(0, 5);
    // loops through the returned value of chocoOnly
    chocoOnly.forEach(choco => {
        // Create the choco-box element and add the necessary html struture for it
        const chocoCtr = document.createElement("article");
        chocoCtr.className = ("choco-box");
        // Add an attribute for data-occasion with the chocolate's occasion
        chocoCtr.setAttribute("data-occasion", choco.occasion);
        // Put the corresponding dicitionary key's values
        chocoCtr.innerHTML = `
                    <div class="choco-img">
                        <img src="${choco.source}" alt="${choco.imgAlt}">
                    </div>
                    <div class="choco-details">
                    <div>
                        <h3 class="choco-name">${choco.name}</h3>
                        <h4 class="choco-price"><span>${choco.price}</span> AED</h4>
                    </div>
                        <div class="choco-buy">
                        <div class="choco-quantity">
                            <button class="minus" aria-label="Decrease quantity">                            
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="#161212"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect x="6" y="17" width="2" height="19" rx="1" transform="rotate(-90 6 17)" />
                            </svg></button>
                            <label for="qty" class="quantity-label">Quantity</label>
                            <input type="number" value="1" name="qty" id="qty" class="quantity-number">
                            <button class="plus" aria-label="Increase quantity">                            
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="#161212"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect x="6" y="17" width="2" height="19" rx="1" transform="rotate(-90 6 17)" />
                                <rect x="14.5" y="6.5" width="2" height="19" rx="1" />
                            </svg></button>
                        </div>
                        <button class="choco-add">Add to Basket</button>
                    </div>
                    </div>
                    `;
        // Add the chocolate box component inside the shop
        shop.appendChild(chocoCtr);

        const quantity = chocoCtr.querySelector(".quantity-number");
        const minusBtn = chocoCtr.querySelector(".minus");
        const addBtn = chocoCtr.querySelector(".plus");
        const addItem = chocoCtr.querySelector(".choco-add");

        // Adds an eventlistener to input quantity and convert it's value to integer
        // we use a mutable variable to update per click and input
        quantity.addEventListener("input", () => {
            let quantityInt = parseInt(quantity.value);
            // if value is less than 1 make the quantity's value to 1 
            if (quantityInt < 1) {
                quantity.value = 1;
            } // if its greater than 100 set value to 100
            else if (quantityInt > 100) {
                quantity.value = 100;
            }
        });

        // Adds an eventlistener when focusing out the input
        quantity.addEventListener("blur", () => {
            let quantityInt = parseInt(quantity.value);
            // check if the value returned is a valid number or less than 1
            if (isNaN(quantityInt) || quantityInt < 1) {
                quantity.value = 1;
            }
        });

        // Add an eventlistener when clicking the minus and the add button 
        minusBtn.addEventListener("click", () => {
            let quantityInt = parseInt(quantity.value);
            // if its greater than 1 allow it to subtract
            if (quantityInt > 1) {
                quantity.value = quantityInt - 1;
            }
        });

        addBtn.addEventListener("click", () => {
            let quantityInt = parseInt(quantity.value);
            // if its greater than 1 allow it to add
            if (quantityInt < 100) {
                quantity.value = quantityInt + 1;
            }
        });

        //-----ADD ITEM TO BASKET FUNCTIONALITY-----//
        //-----ADD ITEM TO BASKET FUNCTIONALITY-----//
        addItem.addEventListener("click", () => {
            // Get the chocolate's name text
            const itemName = chocoCtr.querySelector(".choco-name").textContent;
            // Get the chocolate's price text from the shop
            // Convert the price into a float and fixed it by 2 decimal points e.g. 10.00
            const itemPrice = parseFloat(chocoCtr.querySelector(".choco-price span").textContent);
            // Get the chocolate's quantity's value from the shop convert to an integer
            const itemQty = parseInt(chocoCtr.querySelector(".quantity-number").value);
            // Get the chocolate's image with its source and alt text
            const itemImg = chocoCtr.querySelector(".choco-img img");
            const itemSrc = itemImg.src;
            const itemAlt = itemImg.alt;
            const itemOccasion = chocoCtr.getAttribute("data-occasion");
            console.log(itemOccasion);
            // Get all the basket's items
            const allbasketItems = document.querySelectorAll(".basket-item");
            // Use to check if the item is already in the basket
            let basketHasItem = false;

            // The code within the loop is used to update the quantity and price
            // so that it won't duplicate the same item in the basket
            // Loops through each basket item
            allbasketItems.forEach(bItem => {
                // Get the basket item's name text
                const basketName = bItem.querySelector(".item-name").textContent;

                // Check if the basket's corresponding item name has the shop's item name 
                if (basketName === itemName) {
                    // if there is in the basket set it to true
                    basketHasItem = true;

                    // Get the basket's corresponding item price and quantity
                    const basketPrice = bItem.querySelector(".item-price span");
                    const currentQty = bItem.querySelector(".quantity-number");
                    // Add the basket's item quantity with the shop's item quantity
                    const updateQty = parseInt(currentQty.value) + itemQty;
                    // Change the basket's item quantity value with the updated one
                    currentQty.value = updateQty;
                    // Multiply the updated basket's item quantity with the shop's item price and fixed by 2 decimal points
                    const updatePrice = (updateQty * itemPrice).toFixed(2);
                    // update the basket item's price text with the updated price
                    basketPrice.textContent = updatePrice;
                    // Loop through each item in the total items array 
                    totalItems.forEach(item => {
                        // Check if the item name is the same with the shop's item name
                        if (item.name === itemName) {
                            // then update the array item's quantity and price with the updated one
                            item.qty = updateQty;
                            item.price = updatePrice;
                        }
                    });

                    // Display the corresponding message with the item name and updated quantity and price
                    displayPopup(`<h4>${itemName}</h4>
                        <p>Current Quantity: ${updateQty}</p>
                        <p>Subtotal Price: ${(updatePrice)} AED</p>
                        <p>Check Your Basket</p>`);

                    checkBasket();
                    // Display the updated basket quantity and finalize the total price
                    displayQuantity();
                    finalizeTotal();
                }
            });

            // If the basketHasItem is set to false
            if (!basketHasItem) {
                // Then add the item to the basket
                addtoBasket(itemName, itemPrice, itemQty, itemSrc, itemAlt, itemOccasion);
            }
        });
    });
}

// Initialize the displayChocos of chocolates function
displayChocos();

// Initialize the empty basket
checkBasket();



