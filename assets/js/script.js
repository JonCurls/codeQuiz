var timeLeft = 60;
var questionNum = 0;
var finalScore = 0;
var leaderboard = {};

var timerEl = document.getElementById("timer");
var quizEl = document.getElementById('quiz');
var quizTitleEl = document.getElementById("question-title");
var btn = document.querySelector("#btn");
var questionResponse = document.getElementById("question-answer");
var scoreList = document.getElementById("scoreList");
var questionContainerEl = document.createElement("li");
var questionContainerE2 = document.createElement("li");
var questionContainerE3 = document.createElement("li");
var questionContainerE4 = document.createElement("li");
var scoreListEl = document.createElement("li");


function countdown() {
    //Calls question 1
    questionOne();

    btn.remove();
    quizEl.style.visibility = "hidden";
    //Starts timer
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
//Question 1
function questionOne() {
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
    //Incorrect answer
    qOnebutton.addEventListener("click", function () {
        quizEl.textContent = "Incorrect";
        quizEl.style.visibility = "visible";
        timeLeft = timeLeft - 10;
        if (timeLeft < 0) {
            timeLeft = 0;
        }
    });
    //Correct answer
    qTwobutton.addEventListener("click", questionTwo);
    //Incorrect answer
    qThreebutton.addEventListener("click", function () {
        quizEl.textContent = "Incorrect";
        quizEl.style.visibility = "visible";
        timeLeft = timeLeft - 10;
        if (timeLeft < 0) {
            timeLeft = 0;
        }
    });
    //Incorrect answer
    qFourbutton.addEventListener("click", function () {
        quizEl.textContent = "Incorrect";
        quizEl.style.visibility = "visible";
        timeLeft = timeLeft - 10;
        if (timeLeft < 0) {
            timeLeft = 0;
        }
    });
}
//Question 2
function questionTwo() {
    quizEl.style.visibility = "hidden";
    questionNum++;
    questionContainerEl.remove();
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
    //Incorrect answer
    qOnebutton.addEventListener("click", function () {
        quizEl.textContent = "Incorrect";
        quizEl.style.visibility = "visible";
        timeLeft = timeLeft - 10;
        if (timeLeft < 0) {
            timeLeft = 0;
        }
    });
    //Correct answer
    qTwobutton.addEventListener("click", questionThree);
}
//Question 3
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
    //Incorrect answer
    qOnebutton.addEventListener("click", function () {
        quizEl.textContent = "Incorrect";
        quizEl.style.visibility = "visible";
        timeLeft = timeLeft - 10;
        if (timeLeft < 0) {
            timeLeft = 0;
        }
    });
    //Incorrect answer
    qTwobutton.addEventListener("click", function () {
        quizEl.textContent = "Incorrect";
        quizEl.style.visibility = "visible";
        timeLeft = timeLeft - 10;
        if (timeLeft < 0) {
            timeLeft = 0;
        }
    });
    //Incorrect answer
    qThreebutton.addEventListener("click", function () {
        quizEl.textContent = "Incorrect";
        quizEl.style.visibility = "visible";
        timeLeft = timeLeft - 10;
        if (timeLeft < 0) {
            timeLeft = 0;
        }
    });
    //Correct answer
    qFourbutton.addEventListener("click", questionFour);
}
//Question 4
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
    //Incorrect answer
    qOnebutton.addEventListener("click", function () {
        quizEl.textContent = "Incorrect";
        quizEl.style.visibility = "visible";
        timeLeft = timeLeft - 10;
        if (timeLeft < 0) {
            timeLeft = 0;
        }
        recordScore();
    });
    //Incorrect answer
    qTwobutton.addEventListener("click", function () {
        quizEl.textContent = "Incorrect";
        quizEl.style.visibility = "visible";
        timeLeft = timeLeft - 10;
        if (timeLeft < 0) {
            timeLeft = 0;
        }
        recordScore();
    });
    //Incorrect answer
    qThreebutton.addEventListener("click", function () {
        quizEl.textContent = "Incorrect";
        quizEl.style.visibility = "visible";
        timeLeft = timeLeft - 10;
        if (timeLeft < 0) {
            timeLeft = 0;
        }
        recordScore();
    });
    //Correct answer
    qFourbutton.addEventListener("click", function () {
        recordScore();
    });

}
//Collects score and initials
function recordScore() {
    questionNum++;
    questionContainerE4.remove();
    quizTitleEl.textContent = "GAME OVER";
    quizEl.textContent = timeLeft;
    leaderboard.initials = window.prompt("initials");
    if (leaderboard.initials === null) {
        window.open("highscore.html", "_self");
        return;
    }
    if (leaderboard.initials.length === 0) {
        alert("please enter your initials.");
        leaderboard.initials = window.prompt("initials");
    }
    
    leaderboard.score = timeLeft;
    saveLeaderboard();
}
//Saves score and initials to localStorage
function saveLeaderboard() {
    window.open("highscore.html", "_self");
    var tempLeader = JSON.parse(localStorage.getItem("leaderboard")) || [];
    tempLeader.push(leaderboard);
    localStorage.setItem("leaderboard", JSON.stringify(tempLeader));
    console.log(tempLeader);
}
//Displays scores and initials from localStorage
function printLeaderboard(){
    var printScoreList = JSON.parse(localStorage.getItem("leaderboard")) || [];
    for (var i = 0; i < printScoreList.length; i++){
        if (scoreList === null){
            return false;
        }
        var newUl = document.createElement("ul");
        scoreList.appendChild(newUl);
        newUl.textContent = printScoreList[i].initials + printScoreList[i].score;
    }
}
//Loads scores and initials on page load
var loadLeaderboard = function() {
    JSON.parse(localStorage.getItem("leaderboard")) || [];
    printLeaderboard();
}
loadLeaderboard();
//Click to start quiz
btn.addEventListener("click", countdown);

