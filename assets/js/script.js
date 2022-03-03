
var timeLeft = 60;
var questionNum = 0;
var finalScore = 0;
var leaderboard = {};

var timerEl = document.getElementById("timer");
var quizEl = document.getElementById('quiz');
var quizTitleEl = document.getElementById("question-title");
var btn = document.getElementById("btn");
var questionResponse = document.getElementById("question-answer");
var scoreList = document.getElementById("scoreList");
var questionContainerEl = document.createElement("li");
var questionContainerE2 = document.createElement("li");
var questionContainerE3 = document.createElement("li");
var questionContainerE4 = document.createElement("li");
var scoreListEl = document.createElement("li");

//Click event to start
function countdown() {
    questionOne();

    btn.remove();
    quizEl.style.visibility = "hidden";
    var timeInterval = setInterval(function () {
        timerEl.textContent = "time: " + timeLeft;
        if (questionNum ===4) {
            clearInterval(timeInterval);
        }
        if (timeLeft === 0) {
            recordScore(timeLeft);
            clearInterval(timeInterval);
        }
        timeLeft--;
    }, 1000)
}

function questionOne() {
    //var questionContainerEl = document.createElement("li");
    questionContainerEl.className = "qBox";
    var qOnebutton = document.createElement("button");
    var qTwobutton = document.createElement("button");
    var qThreebutton = document.createElement("button");
    var qFourbutton = document.createElement("button");

    quizTitleEl.textContent = "Question #1. What is the most common way to comment your code in js?"
    qOnebutton.textContent = "A. !!";
    qOnebutton.className = "q-btn";
    qTwobutton.textContent = "B. //";
    qTwobutton.className = "q-btn";
    qThreebutton.textContent = "C. **";
    qThreebutton.className = "q-btn";
    qFourbutton.textContent = "D. ##";
    qFourbutton.className = "q-btn";
    questionResponse.appendChild(questionContainerEl);
    questionContainerEl.appendChild(qOnebutton);
    questionContainerEl.appendChild(qTwobutton);
    questionContainerEl.appendChild(qThreebutton);
    questionContainerEl.appendChild(qFourbutton);
    
    qOnebutton.addEventListener("click", function () {
        quizEl.textContent = "Incorrect";
        quizEl.style.visibility = "visible";
        timeLeft = timeLeft - 10;
        if (timeLeft < 0) {
            timeLeft = 0;
        }
    });
    qTwobutton.addEventListener("click", questionTwo);
    qThreebutton.addEventListener("click", function () {
        quizEl.textContent = "Incorrect";
        quizEl.style.visibility = "visible";
        timeLeft = timeLeft - 10;
        if (timeLeft < 0) {
            timeLeft = 0;
        }
    });
    qFourbutton.addEventListener("click", function () {
        quizEl.textContent = "Incorrect";
        quizEl.style.visibility = "visible";
        timeLeft = timeLeft - 10;
        if (timeLeft < 0) {
            timeLeft = 0;
        }
    });
}

function questionTwo() {
    quizEl.style.visibility = "hidden";
    questionNum++;
    questionContainerEl.remove();
    //questionContainerEl.style.visibility = "hidden";
    //var questionContainerE2 = document.createElement("li");
    questionContainerE2.className = "qBox";
    var qOnebutton = document.createElement("button");
    var qTwobutton = document.createElement("button");
    quizTitleEl.textContent = "Question #2. In js, it is not required to declare the variable before it is called."
    qOnebutton.textContent = "A. True";
    qOnebutton.className = "q-btn";
    qTwobutton.textContent = "B. False";
    qTwobutton.className = "q-btn";
    questionResponse.appendChild(questionContainerE2);
    questionContainerE2.appendChild(qOnebutton);
    questionContainerE2.appendChild(qTwobutton);

    qOnebutton.addEventListener("click", function () {
        quizEl.textContent = "Incorrect";
        quizEl.style.visibility = "visible";
        timeLeft = timeLeft - 10;
        if (timeLeft < 0) {
            timeLeft = 0;
        }
    });
    qTwobutton.addEventListener("click", questionThree);
}

function questionThree() {
    quizEl.style.visibility = "hidden";
    questionNum++;
    questionContainerE2.remove();
    questionContainerE3.className = "qBox";
    var qOnebutton = document.createElement("button");
    var qTwobutton = document.createElement("button");
    var qThreebutton = document.createElement("button");
    var qFourbutton = document.createElement("button");
    quizTitleEl.textContent = "Question #3. Common js data types include all but which of the following?"
    qOnebutton.textContent = "A. String";
    qOnebutton.className = "q-btn";
    qTwobutton.textContent = "B. Boolean";
    qTwobutton.className = "q-btn";
    qThreebutton.textContent = "C. Objects";
    qThreebutton.className = "q-btn";
    qFourbutton.textContent = "D. tinyint";
    qFourbutton.className = "q-btn";
    questionResponse.appendChild(questionContainerE3);
    questionContainerE3.appendChild(qOnebutton);
    questionContainerE3.appendChild(qTwobutton);
    questionContainerE3.appendChild(qThreebutton);
    questionContainerE3.appendChild(qFourbutton);

    qOnebutton.addEventListener("click", function () {
        quizEl.textContent = "Incorrect";
        quizEl.style.visibility = "visible";
        timeLeft = timeLeft - 10;
        if (timeLeft < 0) {
            timeLeft = 0;
        }
    });
    qTwobutton.addEventListener("click", function () {
        quizEl.textContent = "Incorrect";
        quizEl.style.visibility = "visible";
        timeLeft = timeLeft - 10;
        if (timeLeft < 0) {
            timeLeft = 0;
        }
    });
    qThreebutton.addEventListener("click", function () {
        quizEl.textContent = "Incorrect";
        quizEl.style.visibility = "visible";
        timeLeft = timeLeft - 10;
        if (timeLeft < 0) {
            timeLeft = 0;
        }
    });
    qFourbutton.addEventListener("click", questionFour);
}

function questionFour() {
    quizEl.style.visibility = "hidden";
    questionNum++;
    questionContainerE3.remove();
    questionContainerE4.className = "qBox";
    var qOnebutton = document.createElement("button");
    var qTwobutton = document.createElement("button");
    var qThreebutton = document.createElement("button");
    var qFourbutton = document.createElement("button");
    quizTitleEl.textContent = "Question #4. Which of the following is not a event listener?"

    qOnebutton.textContent = "A. String";
    qOnebutton.className = "q-btn";
    qTwobutton.textContent = "B. Click";
    qTwobutton.className = "q-btn";
    qThreebutton.textContent = "C. Mouseover";
    qThreebutton.className = "q-btn";
    qFourbutton.textContent = "D. All are valid";
    qFourbutton.className = "q-btn";
    questionResponse.appendChild(questionContainerE4);
    questionContainerE4.appendChild(qOnebutton);
    questionContainerE4.appendChild(qTwobutton);
    questionContainerE4.appendChild(qThreebutton);
    questionContainerE4.appendChild(qFourbutton);

    qOnebutton.addEventListener("click", function () {
        quizEl.textContent = "Incorrect";
        quizEl.style.visibility = "visible";
        timeLeft = timeLeft - 10;
        if (timeLeft < 0) {
            timeLeft = 0;
        }
        recordScore();
    });
    qTwobutton.addEventListener("click", function () {
        quizEl.textContent = "Incorrect";
        quizEl.style.visibility = "visible";
        timeLeft = timeLeft - 10;
        if (timeLeft < 0) {
            timeLeft = 0;
        }
        recordScore();
    });
    qThreebutton.addEventListener("click", function () {
        quizEl.textContent = "Incorrect";
        quizEl.style.visibility = "visible";
        timeLeft = timeLeft - 10;
        if (timeLeft < 0) {
            timeLeft = 0;
        }
        recordScore();
    });
    qFourbutton.addEventListener("click", function () {
        recordScore();
    });

}

function recordScore() {
    questionNum++;
    questionContainerE4.remove();
    quizTitleEl.textContent = "GAME OVER";
    quizEl.textContent = timeLeft;
    leaderboard.initials = window.prompt("initials");
    leaderboard.score = timeLeft;
    saveLeaderboard();
}

function saveLeaderboard() {
    
    window.open("highscore.html", "_self");
    var tempLeader = JSON.parse(localStorage.getItem("leaderboard")) || [];
    tempLeader.push(leaderboard);
    localStorage.setItem("leaderboard", JSON.stringify(tempLeader));
    console.log(tempLeader);
}

function printLeaderboard(){
    var printScoreList = JSON.parse(localStorage.getItem("leaderboard")) || [];
    //printScoreList = JSON.parse(printScoreList);
    for (var i = 0; i < printScoreList.length; i++){
        if (scoreList === null){
            return false;
        }
        var newUl = document.createElement("ul");
        scoreList.appendChild(newUl);
        newUl.textContent = printScoreList[i].initials + printScoreList[i].score;
    }
}

var loadLeaderboard = function() {
    var highScore = JSON.parse(localStorage.getItem("leaderboard")) || [];
    printLeaderboard();
}

btn.addEventListener("click", countdown);
loadLeaderboard();
