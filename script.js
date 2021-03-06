// Assignment to the elements
var introEl = document.getElementById("intro");
var topEl = document.getElementById("top");
var viewScore = document.getElementById("view-scores");
var timeEl = document.getElementById("timer");
var startBtn = document.getElementById("start-btn");
var quizEl = document.getElementById("quiz-content");
var question = document.getElementById("questions");
var answerA = document.getElementById("answer-A");
var answerB = document.getElementById("answer-B");
var answerC = document.getElementById("answer-C");
var answerD = document.getElementById("answer-D");
var hinterEl = document.getElementById("hinter");
var doneEl = document.getElementById("done");
var totalScore = document.getElementById("total-score");
var initialEl = document.getElementById("initial");
var submitBtn = document.getElementById("submit-btn");
var showScore = document.getElementById("show-score");
var highScore = document.getElementById("high-scores");
var backBtn = document.getElementById("back-btn");
var clearBtn = document.getElementById("clear-btn");

// Quiz content are wrapped into objects
var questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answerA: "A) <javascript>",
        answerB: "B) <js>",
        answerC: "C) <script>",
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
        question: "In Javascript, which of the following is NOT an assignment operator?",
        answerA: "A) +=",
        answerB: "B) ||",
        answerC: "C) *=",
        answerD: "D) =",
        correctAnswer: "B"
    }
]

// Assign some variables to be used for function
var questionIndex = 0;
var scoreCount = 0;
var secondsLeft = 101;
var timerInterval;
var pause;
var quizEnd;

// Put the quiz content to the container
function renderQuestion() {
    var showQuestion = questions[questionIndex];
    question.textContent = showQuestion.question;
    answerA.textContent = showQuestion.answerA;
    answerB.textContent = showQuestion.answerB;
    answerC.textContent = showQuestion.answerC;
    answerD.textContent = showQuestion.answerD;
}

// Pause the correct-or-wrong hinter until next question is answered
function Pause() {
    pause = setTimeout(function hinterDisappear() {
        hinterEl.textContent = "";
    }, 1000);
}

// Set up timer when quiz starts
function timer() {
    timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;
      
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            quizEl.style.display = "none";
            doneEl.style.display = "block";
        }

    }, 1000);
    
    introEl.style.display = "none";
    renderQuestion();
    quizEl.style.display = "block";
}

// Assign the start-button to start quiz and the timer
startBtn.addEventListener("click", timer);

// Set the hinter when the answer is wrong
function correctAnswer() {
    hinterEl.textContent = "Correct!"
}

// Set the hinter when the answer is correct
function wrongAnswer() {
    hinterEl.textContent = "Wrong!"
}

// End the quiz and turn to score-submit block after all questions are answered
function endQuiz() {
    quizEnd = setTimeout(function changeBlock() {
        quizEl.style.display = "none";
        doneEl.style.display = "block";
    }, 1000);
}
 
// Check the answer correct or not
function checkAnswer(answer) {
    if (answer == questions[questionIndex].correctAnswer) {
        scoreCount ++; 
        correctAnswer();
        Pause();
    } 
    else {
        secondsLeft = secondsLeft - 5;
        wrongAnswer();
        Pause();
    }

    if (questionIndex < 9) {
        questionIndex ++;
        renderQuestion();
    }   
    else {
        endQuiz();
        clearInterval(timerInterval);
    }

    totalScore.textContent = scoreCount;
}

// assign the submit-button to submit score record
submitBtn.addEventListener("click", function() {

    var initialInput = initialEl.value;
    var finalScore = {initials: initialInput, score: scoreCount};
    var scoreList = localStorage.getItem("scoreList");

    if (scoreList === null) {
        scoreList = [];
    } 
    else {
        scoreList = JSON.parse(scoreList);
    }

    scoreList.push(finalScore);

    var newAddScore = JSON.stringify(scoreList);
    localStorage.setItem("scoreList", newAddScore);
    ShowScoreList();
        
    doneEl.style.display = "none";
    topEl.style.display = "none";
    showScore.style.display = "block";
});

// Assign the view score option to view all score records
viewScore.addEventListener("click", function() {
    introEl.style.display = "none";
    quizEl.style.display = "none";
    doneEl.style.display = "none";
    topEl.style.display = "none";
    ShowScoreList();
    showScore.style.display = "block";
});

// List all the score records to show-score part
function ShowScoreList() {
    scoreList = localStorage.getItem("scoreList");
    scoreList = JSON.parse(scoreList);

    if (scoreList !== null) {
        for (var i = 0; i < scoreList.length; i++) {
            var record = document.createElement("p");
            record.textContent = scoreList[i].initials + ": " + scoreList[i].score;
            highScore.appendChild(record);
        }
    }
}

// Back to start and refresh the page
backBtn.addEventListener("click", function() {
    location.reload();       
});

// Clear all the records and back to start 
clearBtn.addEventListener("click", function() {
    localStorage.removeItem("scoreList");
    location.reload();
});
