/* This stores all the data for questions and choices that will be used for the quiz */
const data = [
    {
        question: "How do you add spaces between elements in a Grid container?",
        list: [
            { choice: "margin", answer: false },
            { choice: "justify-content", answer: false },
            { choice: "gap", answer: true, description: "Gap allows a specified specified spacing between elements." },
            { choice: "padding", answer: false },
        ]
    },

    {
        question: "How do you create columns in Grid?",
        list: [
            { choice: "grid-template-columns", answer: true, description: "grid-template-columns allows you to create equal or different spaced column areas in a Grid." },
            { choice: "column-count", answer: false },
            { choice: "grid-template-areas", answer: false },
            { choice: "grid-template-rows", answer: false },
        ]
    },

    {
        question: "How do you specify the grid names for a grid-template-areas?",
        list: [
            { choice: "grid", answer: false },
            { choice: "grid-area", answer: true, description: "grid-area allows you to create any names that you want to use in a grid-template-area." },
            { choice: "grid-name", answer: false },
            { choice: "name", answer: false },
        ]
    },

    {
        question: "What does grid-column: span 2 do?",
        list: [
            { choice: "Move the item in the 2nd column", answer: false },
            { choice: "Multiplies the given number by 2 and occupies 4 columns", answer: false },
            { choice: "Adds 2 columns in a grid container", answer: false, },
            { choice: "Occupies 2 columns in a grid container", answer: true, description: "grid-column: span 2 occupies 2 columns from top to bottom." },
        ]
    },

    {
        question: "How do you create rows in Grid?",
        list: [
            { choice: "grid-template-rows", answer: true, description: "grid-template-rows allows you to create equal or different spaced row areas in a Grid." },
            { choice: "grid-row", answer: false },
            { choice: "row-gap", answer: false },
            { choice: "grid-auto-rows", answer: false },
        ]
    },

    {
        question: "What does repeat(3, 1fr) for grid-template-columns/rows?",
        list: [
            { choice: "Creates 3 equal column/row sizes", answer: true, description: "It creates equal spaces rather than using (1fr 1fr 1fr)" },
            { choice: "Multiplies 1fr by 3 creating a 3fr", answer: false },
            { choice: "Creates 9 equal columns/row sizes because it multiples 3 by 1fr meaning 3 itself", answer: false },
            { choice: "Nothing", answer: false }
        ]
    },

    {
        question: "What does grid-auto-rows do?",
        list: [
            { choice: "Creates 9 equal columns/row sizes because it multiples 3 by 1fr meaning 3 itself", answer: false },
            { choice: "Automatically creates a row when the grid item occup", answer: false },
            { choice: "Automatically creates a row when the grid item exceeds the grid template", answer: true, description: "It creates equal spaces rather than using (1fr 1fr 1fr)" },
            { choice: "Nothing", answer: false }
        ]
    },

    {
        question: "What does auto-fit do in repeat(auto-fit, minmax(100px, 1fr)?",
        list: [
            { choice: "Multiplies the number of items by the calculated minmax value and uses it for defined column/row areas", answer: false },
            { choice: "Creates as many columns and rows in the container but doesn't put empty areas", answer: true, description: "auto-fit tries to fit all the items as much as possible and ignores any empty areas" },
            { choice: "Creates as many columns and rows in the container even if it's empty", answer: false },
            { choice: "Divides the number of items by the calculated minmax value to use it for column/row areas", answer: false }
        ]
    },

    {
        question: "What is the shorten property for grid-column and grid-row?",
        list: [
            { choice: "grid-place", answer: false },
            { choice: "grid", answer: false },
            { choice: "grid-space", answer: false },
            { choice: "grid-area", answer: true, description: "grid-area is the shorten property for grid-column and grid-row e.g. (grid-area: 2 / 3 / 1 / 5)" }
        ]
    },

    {
        question: "Did you enjoy the quiz?",
        list: [
            { choice: "Yesn't", answer: true, description: "Huhhh" },
            { choice: "Meow", answer: true, description: "Meow meow meow meow" },
            { choice: "N/A", answer: true, description: "Undefined" },
            { choice: "Flexbox", answer: true, description: "Grid is better imo" }

        ]
    }
]

export default data;