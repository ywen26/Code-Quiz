var highScore = document.getElementById("high-scores");
var backBtn = document.getElementById("back-btn");
var clearBtn = document.getElementById("clear-btn");

var scoreList = localStorage.getItem("scoreList");
scoreList = JSON.parse(scoreList);

if (scoreList !== null) {
    for (var i = 0; i < scoreList.length; i++) {
        var record = document.createElement("p");
        record.textContent = scoreList[i].initials + ": " + scoreList[i].score;
        highScore.appendChild(record);
    }
}

clearBtn.addEventListener("click", function() {
    localStorage.removeItem("scoreList");
    location.reload();
});

backBtn.addEventListener("click", function() {
    window.location.replace("./index.html");       
});
