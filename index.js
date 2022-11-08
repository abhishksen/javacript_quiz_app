// quiz data 

const data = [

    {
        id: 1,
        question: "1.Which of the following is a frontend tool?",
        answers: [
            { answer: "reactjs", isCorrect: true },
            { answer: "java", isCorrect: false },
            { answer: "vs code", isCorrect: false },
            { answer: "python", isCorrect: false },
        ],
    },
    {
        id: 2,
        question: "2.Which of the following object oriented programming language?",
        answers: [
            { answer: "reactjs", isCorrect: false },
            { answer: "java", isCorrect: true },
            { answer: "vs code", isCorrect: false },
            { answer: "C", isCorrect: false },
        ],
    },
    {
        id: 3,
        question: "3.What is DOM?",
        answers: [
            { answer: "Document Object Model", isCorrect: true },
            { answer: "java", isCorrect: false },
            { answer: "vs code", isCorrect: false },
            { answer: "python", isCorrect: false },
        ],
    },
    {
        id: 4,
        question: "4.Which of the following is a js library?",
        answers: [
            { answer: "java", isCorrect: false },
            { answer: "vs code", isCorrect: false },
            { answer: "python", isCorrect: false },
            { answer: "reactjs", isCorrect: true },
        ],
    },
    {
        id: 5,
        question: "5.Reactjs is created by?",
        answers: [
            { answer: "java", isCorrect: false },
            { answer: "vs code", isCorrect: false },
            { answer: "python", isCorrect: false },
            { answer: "facebook", isCorrect: true },
        ],
    },
    {
        id: 6,
        question: "6.Which of the following is a code editor?",
        answers: [
            { answer: "java", isCorrect: false },
            { answer: "reactjs", isCorrect: false },
            { answer: "vs code", isCorrect: true },
            { answer: "python", isCorrect: false },
        ],
    },
    {
        id: 7,
        question: "7.Which of the following is used to built website UIs?",
        answers: [
            { answer: "reactjs", isCorrect: true },
            { answer: "java", isCorrect: false },
            { answer: "vs code", isCorrect: false },
            { answer: "python", isCorrect: false },
        ],
    },
    {
        id: 8,
        question: "8.Which of the following is a react hook?",
        answers: [
            { answer: "java", isCorrect: false },
            { answer: "vs code", isCorrect: false },
            { answer: "python", isCorrect: false },
            { answer: "useState", isCorrect: true },
        ],
    },

]

const gameScreen = document.querySelector(".game")
const resultScreen = document.querySelector(".result")
const question = document.querySelector(".question")
const answersContainer = document.querySelector(".answers")
const submit = document.querySelector(".submit")
const play = document.querySelector(".play")

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;

const playAgain = () => {
    qIndex = 0;
    correctCount = 0;
    wrongCount = 0;
    total = 0;
    showQuestion(qIndex);
};

play.addEventListener("click", () => {
    resultScreen.style.display = "none";
    gameScreen.style.display = "block";
    playAgain();
})

const showResult = () => {

    total = (2 * correctCount - wrongCount) * 5;

    resultScreen.style.display = "block";
    gameScreen.style.display = "none";

    resultScreen.querySelector(".correct").textContent =
        `Correct Answers: ${correctCount}`

    resultScreen.querySelector(".wrong").textContent =
        `Wrong Answers: ${wrongCount}`

    resultScreen.querySelector(".score").textContent =
        `Total score earned: ${total}`

}

const showQuestion = (qNumber) => {
    if (qIndex === data.length) return showResult();
    selectedAnswer = null;
    question.textContent = data[qNumber].question;
    answersContainer.innerHTML = data[qNumber].answers.map((item, index) =>
        `<div class="answer">
        <input name="answer" type="radio" id=${index} value=${item.isCorrect} />
        <label for=${index}>${item.answer}</label>
      </div>`
    ).join("");

    selectAnswer()
};

const selectAnswer = () => {
    answersContainer.querySelectorAll("input").forEach(el => {
        el.addEventListener("click", (e) => {
            selectedAnswer = e.target.value;
        });
    });
};

const submitAnswer = () => {
    submit.addEventListener("click", () => {
        if (selectedAnswer !== null) {
            selectedAnswer === "true" ? correctCount++ : wrongCount++;
            qIndex++;
            showQuestion(qIndex);
        } else {
            alert("Select an answer!");
        }
    });
};


showQuestion(qIndex)
submitAnswer()