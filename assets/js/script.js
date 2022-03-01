var timeLeft = 60;
var questionNum = 0;
var finalScore = 0;
var leaderboard = {};

var timerEl = document.getElementById("timer");
var quizEl = document.getElementById('quiz');
var quizTitleEl = document.getElementById("question-title");
var btn = document.getElementById("btn");
var questionResponse = document.getElementById("question-answer");
var questionContainerEl = document.createElement("li");
var questionContainerE2 = document.createElement("li");
var questionContainerE3 = document.createElement("li");
var questionContainerE4 = document.createElement("li");

//Click event to start
function countdown() {
    questionOne();

    btn.style.visibility = "hidden";
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
    document.body.appendChild(questionContainerEl);
    questionContainerEl.appendChild(qOnebutton);
    questionContainerEl.appendChild(qTwobutton);
    questionContainerEl.appendChild(qThreebutton);
    questionContainerEl.appendChild(qFourbutton);
    
    qOnebutton.addEventListener("click", function () {
        questionResponse.textContent = "Incorrect";
        timeLeft = timeLeft - 10;
        if (timeLeft < 0) {
            timeLeft = 0;
            recordScore();
        }
        questionTwo();
    });
    qTwobutton.addEventListener("click", questionTwo);
    qThreebutton.addEventListener("click", function () {
        timeLeft = timeLeft - 10;
        if (timeLeft < 0) {
            timeLeft = 0;
            recordScore();
        }
        questionTwo();
    });
    qFourbutton.addEventListener("click", function () {
        timeLeft = timeLeft - 10;
        if (timeLeft < 0) {
            timeLeft = 0;
            recordScore();
        }
        questionTwo();
    });
}

function questionTwo() {
    questionNum++;
    console.log(questionNum);
    questionContainerEl.style.visibility = "hidden";
    questionContainerE2.className = "qBox";
    var qOnebutton = document.createElement("button");
    var qTwobutton = document.createElement("button");
    quizTitleEl.textContent = "Question #2. In js, it is not required to declare the variable before it is called"
    qOnebutton.textContent = "A. True";
    qOnebutton.className = "q-btn";
    qTwobutton.textContent = "B. False";
    qTwobutton.className = "q-btn";
    document.body.appendChild(questionContainerE2);
    questionContainerE2.appendChild(qOnebutton);
    questionContainerE2.appendChild(qTwobutton);

    qOnebutton.addEventListener("click", function () {
        timeLeft = timeLeft - 10;
        if (timeLeft < 0) {
            timeLeft = 0;
            recordScore();
        }
        questionThree();
    });
    qTwobutton.addEventListener("click", questionThree);
}

function questionThree() {
    questionNum++;
    console.log(questionNum);
    questionContainerE2.style.visibility = "hidden";
    questionContainerE3.className = "qBox";
    var qOnebutton = document.createElement("button");
    var qTwobutton = document.createElement("button");
    var qThreebutton = document.createElement("button");
    var qFourbutton = document.createElement("button");
    quizTitleEl.textContent = "Question #3. Common js data types include all but which of the following?"
    //quizEl.innerHTML = "A. String<br />" + "<br />B. Boolean<br />" + "<br />C. Objects<br />" + "<br />D. tinyint";
    qOnebutton.textContent = "A. String";
    qOnebutton.className = "q-btn";
    qTwobutton.textContent = "B. Boolean";
    qTwobutton.className = "q-btn";
    qThreebutton.textContent = "C. Objects";
    qThreebutton.className = "q-btn";
    qFourbutton.textContent = "D. tinyint";
    qFourbutton.className = "q-btn";
    document.body.appendChild(questionContainerE3);
    questionContainerE3.appendChild(qOnebutton);
    questionContainerE3.appendChild(qTwobutton);
    questionContainerE3.appendChild(qThreebutton);
    questionContainerE3.appendChild(qFourbutton);

    qOnebutton.addEventListener("click", function () {
        timeLeft = timeLeft - 10;
        if (timeLeft < 0) {
            timeLeft = 0;
            recordScore();
        }
        questionFour();
    });
    qTwobutton.addEventListener("click", function () {
        timeLeft = timeLeft - 10;
        if (timeLeft < 0) {
            timeLeft = 0;
            recordScore();
        }
        questionFour();
    });
    qThreebutton.addEventListener("click", function () {
        timeLeft = timeLeft - 10;
        if (timeLeft < 0) {
            timeLeft = 0;
            recordScore();
        }
        questionFour();
    });
    qFourbutton.addEventListener("click", questionFour);
}

function questionFour() {
    questionNum++;
    console.log(questionNum);
    questionContainerE3.style.visibility = "hidden";
    questionContainerE4.className = "qBox";
    var qOnebutton = document.createElement("button");
    var qTwobutton = document.createElement("button");
    var qThreebutton = document.createElement("button");
    var qFourbutton = document.createElement("button");
    quizTitleEl.textContent = "Question #4. Which of the following is not a event listener?"
    //quizEl.innerHTML = "A. Mouseout<br />" + "<br />B. Click<br />" + "<br />C. Mouseover<br />" + "<br />D. All are valid";

    qOnebutton.textContent = "A. String";
    qOnebutton.className = "q-btn";
    qTwobutton.textContent = "B. Click";
    qTwobutton.className = "q-btn";
    qThreebutton.textContent = "C. Mouseover";
    qThreebutton.className = "q-btn";
    qFourbutton.textContent = "D. All are valid";
    qFourbutton.className = "q-btn";
    document.body.appendChild(questionContainerE4);
    questionContainerE4.appendChild(qOnebutton);
    questionContainerE4.appendChild(qTwobutton);
    questionContainerE4.appendChild(qThreebutton);
    questionContainerE4.appendChild(qFourbutton);

    qOnebutton.addEventListener("click", function () {
        timeLeft = timeLeft - 10;
        if (timeLeft < 0) {
            timeLeft = 0;
            recordScore();
        }
        recordScore(timeLeft);
    });
    qTwobutton.addEventListener("click", function () {
        timeLeft = timeLeft - 10;
        if (timeLeft < 0) {
            timeLeft = 0;
            recordScore();
        }
        recordScore(timeLeft);
    });
    qThreebutton.addEventListener("click", function () {
        timeLeft = timeLeft - 10;
        if (timeLeft < 0) {
            timeLeft = 0;
            recordScore();
        }
        recordScore(timeLeft);
    });
    qFourbutton.addEventListener("click", function () {
        recordScore(timeLeft);
    });

}

function recordScore(timeLeft) {
    questionNum++;
    questionContainerEl.style.visibility = "hidden";
    questionContainerE2.style.visibility = "hidden";
    questionContainerE3.style.visibility = "hidden";
    questionContainerE4.style.visibility = "hidden";
    quizTitleEl.textContent = "GAME OVER";
    quizEl.textContent = timeLeft;
    
    leaderboard.initals = window.prompt("Initals");
    leaderboard.score = timeLeft;
    console.log(leaderboard);
    saveLeaderboard();
}

function saveLeaderboard() {
    openScore();
    var tempLeader = JSON.parse(localStorage.getItem("leaderboard")) || [];
    tempLeader.push(leaderboard);
    localStorage.setItem("leaderboard", JSON.stringify(tempLeader));
    console.log(tempLeader);
}

var loadLeaderboard = function() {
    var highScore = JSON.parse(localStorage.getItem("leaderboard")) || [];
    console.log(highScore);
}

function openScore (){
    window.open("highscore.html", "_self");
}

btn.addEventListener("click", countdown);
loadLeaderboard();

