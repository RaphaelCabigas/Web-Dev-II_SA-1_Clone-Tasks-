const form = document.querySelector("form");
const addInput = document.querySelector(".add-input");
const listCtr = document.querySelector(".list-ctr");

form.addEventListener("submit", (e) => {
    // Prevent's from reloading the page
    e.preventDefault();
    // Store user input
    const todo = addInput.value;
    // Checks if there's an input 
    if (todo) {
        addTodo(todo);
        // If there's nothing display a warning
    } else {
        const warning = document.createElement("p");
        warning.classList.add("warning");
        warning.textContent = "Please input something first";
        // Checks if there's a warning on the document already
        const warningActive = document.querySelector(".warning");
        // If there's no warning append it 
        if (!warningActive) {
            document.body.appendChild(warning);
            setTimeout(() => {
                warning.classList.add("open");
            }, 500);
            setTimeout(() => {
                warning.classList.remove("open");
            }, 2000);
            setTimeout(() => {
                document.body.removeChild(warning);
            }, 2500);
        }
    }
});

function addTodo(t) {
    /* Create the todo container li */
    const createTodo = document.createElement("li");
    createTodo.className = ("todo");
    createTodo.style.animation = "addTodoAni 0.5s ease forwards";
    createTodo.innerHTML =
        `   
        <p>${t}</p>
        <button class="remove-btn">Remove</button>
        `
    /* Reset the input value and after creating a todo have the input STILL on focus */
    addInput.value = "";
    addInput.focus();
    listCtr.appendChild(createTodo);

    //-----ADD THE REMOVE FUNCTION TO CREATED TODO-----//
    const removeTodo = createTodo.querySelector(".remove-btn");

    removeTodo.addEventListener("click", () => {
        createTodo.style.animation = "removeTodoAni 0.3s ease forwards";
        setTimeout(() => {
            createTodo.remove();
        }, 300);
    });
}

//-----ADD THE REMOVE FUNCTION TO EXISTING TODOS-----//
//-----ADD THE REMOVE FUNCTION TO EXISTING TODOS-----//
const exRemoveBtns = document.querySelectorAll(".remove-btn");

exRemoveBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        // Remove the list that is closest to a li tag
        const todo = btn.closest("li");
        todo.style.animation = "removeTodoAni 0.3s ease forwards";
        setTimeout(() => {
            todo.remove();
        }, 300);
    })
})