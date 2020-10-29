var introEl = document.getElementById("intro");
var startBtn = document.getElementById("start-btn");
var quizEl = document.getElementById("quiz-content");
var question = document.getElementById("questions");
var answerA = document.getElementById("answer-A");
var answerB = document.getElementById("answer-B");
var answerC = document.getElementById("answer-C");
var answerD = document.getElementById("answer-D");

var questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answerA: "A) <javascript>",
        answerB: "B) <js>",
        answerC: "C) <script",
        answerD: "D) <scripting>",
        correctAnswer: "C"
    }, {
        question: "Where is the correct place to insert a JavaScript?",
        answerA: "A) Both the <head> section and the <body> section are correct",
        answerB: "B) The <body> section",
        answerC: "C) The <head> section",
        answerD: "D) Neither the <head> section nor the <body> section",
        correctAnswer: "A"
    }, {
        question: "How do you create a function?",
        answerA: "A) function: myFunction()",
        answerB: "B) function = myFunction()",
        answerC: "C) function myFunction()",
        answerD: "D) myFunction(): function",
        correctAnswer: "C"
    },{
        question: "How do you write a conditional statement for executing some statements only if 'i' is equal to 5?",
        answerA: "A) if i==5 then",
        answerB: "B) if (i==5)",
        answerC: "C) if i=5 then",
        answerD: "D) if i=5",
        correctAnswer: "B"
    }, {
        question: "How does a 'for' loop start?",
        answerA: "A) for (i = 0; i <= 5)",
        answerB: "B) for (i = 0; i <= 5; i++)",
        answerC: "C) for i = 1 to 5",
        answerD: "D) for (i <= 5; i++)",
        correctAnswer: "B"
    }, {
        question: "How can you add a comment in a CSS?",
        answerA: "A) // This is a comment",
        answerB: "B) <!-- This is a comment -->",
        answerC: "C) #This is a comment",
        answerD: "D) /* This is a comment */",
        correctAnswer: "D"
    }, {
        question: "What are the basic ways that people can become aware of your Web site?",
        answerA: "A) URL is told by somebody",
        answerB: "B) The link is followed from another Web site",
        answerC: "C) Your site is listed in a search engine",
        answerD: "D) All of the above",
        correctAnswer: "D"
    }, {
        question: "The majority of a typical web document will be found in:",
        answerA: "A) the head tag",
        answerB: "B) the title tag",
        answerC: "C) the body tag",
        answerD: "D) a comment tag",
        correctAnswer: "C"
    }, {
        question: "In JavaScript, the expression 'x != y' returns false if:",
        answerA: "A) the variables are equal",
        answerB: "B) x is less than y",
        answerC: "C) the variavles are not equal",
        answerD: "D) None of the above",
        correctAnswer: "A"
    }, {
        queston: "In Javascript, which of the following is NOT an assignment operator?",
        answerA: "A) +=",
        answerB: "B) ||",
        answerC: "C) *=",
        answerD: "D) =",
        correctAnswer: "B"
    }
]

var runningQuestion = 0;

function renderQuestion() {
    var q = questions[runningQuestion];

    question.textContent = q.question;
    answerA.textContent = q.answerA;
    answerB.textContent = q.answerB;
    answerC.textContent = q.answerC;
    answerD.textContent = q.answerD;
}

startBtn.addEventListener("click", function() {
    introEl.style.display = "none";
    renderQuestion();
    quizEl.style.display = "block";
});
