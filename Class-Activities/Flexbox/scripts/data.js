/* This stores all the data for questions and choices that will be used for the quiz */
const data = [
    {
        question: "Which property determines the direction of flex items' layout?",
        list: [
            { choice: "order", answer: false },
            { choice: "justify-content", answer: false },
            { choice: "flex-direction", answer: true, description: "flex-direction determines the direction of the main axis." },
            { choice: "align-items", answer: false },
        ]
    },
    {
        question: "What's a shorten property for flex-direction and flex-wrap?",
        list: [
            { choice: "flex-flow", answer: true, description: "flex-flow is the shorten property e.g. (flex-flow: column wrap;)" },
            { choice: "flex", answer: false },
            { choice: "flex-pack", answer: false },
            { choice: "flex-display", answer: false },
        ]
    },
    {
        question: "What does flex-basis do?",
        list: [
            { choice: "Sets the direction of the element", answer: false },
            { choice: "Sets the size of the element", answer: true, description: "flex-basis initializes the amount of space it will allocate before occupying any remaining space." },
            { choice: "Sets the space between the items", answer: false },
            { choice: "Sets the display type of the element", answer: false },
        ]
    },
    {
        question: "Which property will make the elements with a flex column direction to align horizontally center?",
        list: [
            { choice: "justify-items", answer: false },
            { choice: "align-content", answer: false },
            { choice: "align-self", answer: false, },
            { choice: "align-items", answer: true, description: "In a column direction, align-items will horizontally center it." },
        ]
    },
    {
        question: "What will display: flex do to the elements' direction?",
        list: [
            { choice: "Display in a row", answer: true, description: "It will display the elements in a row." },
            { choice: "Display in a column", answer: false },
            { choice: "Display diagonally", answer: false },
            { choice: "Display in a row but reversed", answer: false },
        ]
    },
    {
        question: "How can you let flex items automatically move to another row when there's not enough space in the container?",
        list: [
            { choice: "flex-row", answer: false },
            { choice: "flex-move", answer: false },
            { choice: "flex-wrap", answer: true, description: "flex-wrap allows items to automatically move to another row (flex-wrap: wrap;)" },
            { choice: "wrap", answer: false },
        ]
    },
    {
        question: "What is the shorten property for flex-grow, flex start and flex-basis?",
        list: [
            { choice: "flex", answer: true, description: "flex is the shorten property e.g. (flex: grow shrink basis)" },
            { choice: "flex-start", answer: false },
            { choice: "flex-initial", answer: false },
            { choice: "flex-space", answer: false },
        ]
    },
    {
        question: "What does flex-shrink set to 0 do to a flex item?",
        list: [
            { choice: "It allows the item to grow", answer: false },
            { choice: "It shrinks the item to the smallest size", answer: false },
            { choice: "It allows the item to shrink", answer: false },
            { choice: "It does not allow the item to shrink", answer: true, description: "flex-shrink: 0 does not let the item to shrink even when there's not enough space." },
        ]
    },
    {
        question: "What is the default value for flex?",
        list: [
            { choice: "1 1 auto", answer: false },
            { choice: "0 0 auto", answer: false },
            { choice: "0 1 auto", answer: true, description: "The item will not grow, the item will shrink if there's not enough space and the item's size will be based on its content." },
            { choice: "auto auto auto", answer: false },
        ]
    },
    {
        question: "Did you enjoy the quiz?",
        list: [
            { choice: "I don't know", answer: true, description: "Same." },
            { choice: "No", answer: true, description: "Reasonable answer. Have a nice day." },
            { choice: "Yes", answer: true, description: "POV: \(^-^)/ <- this is you." },
            { choice: "Maybe", answer: true, description: "Just maybe." },

        ]
    }
]

export default data;