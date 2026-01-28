// DOM elements

const startScreen = document.getElementById("start-screen")
const quizScreen = document.getElementById("quiz-screen")
const resultScreen = document.getElementById("result-screen")
const startButton = document.getElementById("start-btn")
const questionText = document.getElementById("question-text")
const answersContainer = document.getElementById("answers-container")
const currentQuestionSpan = document.getElementById("current-question")
const totalQuestionSpan = document.getElementById("total-questions")
const scoreSpan= document.getElementById("score")
const finalScoreSpan = document.getElementById("final-score")
const maxScoreSpan= document.getElementById("max-score")
const resultMessage = document.getElementById("result-message")
const restartButton = document.getElementById("restart-btn")
const progressBar = document.getElementById("progress")

const quizQuestions = [
  {
    question: "Which keyword is used to declare a block-scoped variable in JavaScript?",
    answers: [
      { text: "var", correct: false },
      { text: "let", correct: true },
      { text: "const", correct: false },
      { text: "static", correct: false }
    ]
  },

  {
    question: "Which method is used to convert a JavaScript object into a JSON string?",
    answers: [
      { text: "JSON.parse()", correct: false },
      { text: "JSON.stringify()", correct: true },
      { text: "JSON.convert()", correct: false },
      { text: "JSON.object()", correct: false }
    ]
  },

  {
    question: "Which of the following is NOT a primitive data type in JavaScript?",
    answers: [
      { text: "String", correct: false },
      { text: "Number", correct: false },
      { text: "Object", correct: true },
      { text: "Boolean", correct: false }
    ]
  },

  {
    question: "What does the '===' operator do in JavaScript?",
    answers: [
      { text: "Compares values only", correct: false },
      { text: "Compares type only", correct: false },
      { text: "Compares value and type", correct: true },
      { text: "Assigns a value", correct: false }
    ]
  },

  {
    question: "Which function is used to execute code after a delay?",
    answers: [
      { text: "setTimeout()", correct: true },
      { text: "setInterval()", correct: false },
      { text: "delay()", correct: false },
      { text: "wait()", correct: false }
    ]
  }
];
//quiz state vars

let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

//event listeners

startButton.addEventListener("click",startQuiz)
restartButton.addEventListener("click",restartQuiz)


function startQuiz(){
  //reset vars
  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = 0;
  startScreen.classList.remove("active");
  quizScreen.classList.add("active");

  showQuestion()
}

function showQuestion(){
    //reset state 
    answersDisabled = false;
    const currentQuestion = quizQuestions[currentQuestionIndex];

    currentQuestionSpan.textContent = currentQuestionIndex + 1;

    const progressPercent = (currentQuestionIndex/quizQuestions.length) * 100;
    progressBar.style.width = progressPercent + "%"

    questionText.textContent = currentQuestion.question;


   //if we will not use this the next run will contain the previous answers with the new answers
    answersContainer.innerHTML = "";

    currentQuestion.answers.forEach((answer) =>{
      const button= document.createElement("button")
      button.textContent = answer.text
      button.classList.add("answer-btn")
      //what is dataset? It is a property of button element that allows you to store custom data
      button.dataset.correct = answer.correct

      button.addEventListener("click", selectAnswer)

      answersContainer.appendChild(button)

    });
}

function selectAnswer(event){
      if(answersDisabled) return

      answersDisabled = true

      const selectedButton = event.target;
      const isCorrect = selectedButton.dataset.correct ==="true"

      
      Array.from(answersContainer.children).forEach(button =>{
        if(button.dataset.correct === "true"){
          button.classList.add("correct");
        }else if(button == selectedButton){
          button.classList.add("incorrect");
        }
      });

      if(isCorrect){
        score++ ;
        scoreSpan.textContent = score;
      }

      setTimeout(() =>{
        currentQuestionIndex++ ;
        if(currentQuestionIndex < quizQuestions.length){
          showQuestion()
        }else{
          showResults()
        }
      }, 1000)

}

function showResults(){
  quizScreen.classList.remove("active")
  resultScreen.classList.add("active")

  finalScoreSpan.textContent = score;

  const percentage = (score/quizQuestions.length)*100

  if(percentage == 100){
    resultMessage.textContent ="Perfect! You're a genius!";

  }else if(percentage >= 80){
    resultMessage.textContent = "Great job! You know your stuff!";
  }else if(percentage >= 60){
    resultMessage.textContent = "Good effort! Keep learning!";
  }else if(percentage >= 40){
    resultMessage.textContent = "Not bad! Try again to improve!";
  }else{
    resultMessage.textContent = "Keep studying! You'll get better!";
  }

}


function restartQuiz(){
  resultScreen.classList.remove("active")
  startQuiz();
}
