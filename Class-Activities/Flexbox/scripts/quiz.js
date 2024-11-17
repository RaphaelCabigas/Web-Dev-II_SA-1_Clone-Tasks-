/* Import the data array/dictionary from the data.js file */
import data from './data.js';

/*-----START SCREEN-----*/
/*-----START SCREEN-----*/

const startingCtr = document.querySelector(".starting-ctr");
const startBtn = document.querySelector(".starting-ctr button");

startBtn.addEventListener("click", () => {
    startingCtr.classList.add("close");
    displayQuestion();
})

const choices = document.querySelectorAll(".choice");
const nextBtn = document.querySelector(".next-btn");
let score = 0;
const questionCtr = document.querySelector(".question");
const questionHeading = document.querySelector(".question h2");
let questionCount = 1;

/*-----HANDLES THE QUESTIONS, CHOICES, RIGHT ANSWER TO BE DISPLAYED-----*/
/*-----HANDLES THE QUESTIONS, CHOICES, RIGHT ANSWER TO BE DISPLAYED-----*/

function displayQuestion() {
    /* Access the corresponding question based on the index */
    /* questionCount subtract by 1 because indexing starts at 0 */
    const quiz = data[questionCount - 1];
    /* Change the text for the question from the returned data question */
    questionHeading.textContent = quiz.question;

    /* Loops through each choice */
    choices.forEach((choice, i) => {
        choice.style.cursor = "pointer";
        /* Access the returned choice from the list based on the index */
        const choiceText = quiz.list[i];
        /* Change the choice text based on the returned choice from the data */
        choice.textContent = choiceText.choice;

        /* Check if there's any choice from before with the class correct */
        choice.classList.remove("correct");
        const description = choice.querySelector(".desc");
        /* If there is a description in the choice remove it */
        if (description) {
            description.remove();
        }

        /* If the answer for the choice is correct or true */
        if (choiceText.answer) {
            /* Add the class correct and create its description 
            and then add it inside of the choice button */
            choice.classList.add("correct");
            const createDesc = document.createElement("p");
            createDesc.classList.add("desc");
            createDesc.textContent = choiceText.description;
            choice.appendChild(createDesc);
        }
    })
}

/*-----HANDLES THE CHOICE SELECTED BY THE USER-----*/
/*-----HANDLES THE CHOICE SELECTED BY THE USER-----*/

choices.forEach((choice => {
    /* When choice is correct add a score but if its not then add the red color */
    choice.addEventListener("click", () => {
        if (choice.classList.contains("correct")) {
            score += 1;
        } else {
            choice.style.backgroundColor = "#A02334";
        }
        /* Display the correct answer, the description and the next button */
        /* P.S. I loop through all of it because it will be useful for the last question */
        const choicesCorrect = document.querySelectorAll(".correct");
        choicesCorrect.forEach(correct => {
            correct.style.backgroundColor = "#347928";
        })
        const descriptions = document.querySelectorAll(".desc");
        descriptions.forEach(desc => {
            desc.classList.add("open");
        })
        nextBtn.classList.add("open");
        /* Disable all buttons after a choice is clicked */
        choices.forEach((btn) => {
            btn.style.cursor = "not-allowed";
            btn.disabled = true;
        });
    });
}));

const scoreCtr = document.querySelector(".score-ctr");
const scoreCounter = document.querySelector(".score-ctr p");
const questionNumber = document.querySelector(".question-number p");

/*-----NEXT QUESTION BUTTON-----*/
/*-----NEXT QUESTION BUTTON-----*/

nextBtn.addEventListener("click", () => {
    /* When next button is clicked close the current question*/
    questionCtr.classList.add("close");
    /* If the question count is equal to the data's length */
    if (questionCount === data.length) {
        scoreCounter.textContent = `${score} out of 10`;
        scoreCtr.classList.add("open");
    } else {
        questionCount += 1;
        /* We add 1 to it so that it will remain readable for users since the count starts with 0 */
        questionNumber.textContent = `${questionCount} out of 10`;
    }

    document.body.style.overflow = "hidden";

    choices.forEach(choice => {
        /* Loop through each choice and then randomize its Z rotation for an animation
body's overflow set to hidden to not disrupt when rotating the choices */
        choice.style.transform = `rotateZ(${Math.floor(Math.random() * (180 - 60) + 60)}deg)`;
    });
    /* Set a delay of 1s and then remove the close class and reset the choices state */
    setTimeout(() => {
        questionCtr.classList.remove("close");
        choices.forEach((choice => {
            choice.style.transform = `rotateZ(0deg)`;
            choice.disabled = false;
            choice.style.backgroundColor = "";
        }));
        displayQuestion();
    }, 1000);
    /* Set a delay of 1.5s and then make the scroll visible again 
    This is used so that it won't disrupt the choices animation */
    setTimeout(() => {
        document.body.style.overflow = "visible";
    }, 1500);

    const description = document.querySelector(".desc");
    /* Remove the open classes to the description and next button */
    description.classList.remove("open");
    nextBtn.classList.remove("open");

});

/*-----TRY AGAIN BUTTON-----*/
/*-----TRY AGAIN BUTTON-----*/

const againBtn = document.querySelector(".score-ctr button");

againBtn.addEventListener("click", () => {
    /* Reset the score and question count */
    questionCount = 1;
    score = 0;
    /* Close the score screen and reset the question count text */
    scoreCtr.classList.remove("open");
    questionNumber.textContent = `${questionCount} out of 10`;
    /* Start the quiz again */
    displayQuestion();
})