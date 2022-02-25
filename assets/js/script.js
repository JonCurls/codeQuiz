var timerEl = document.getElementById("timer");
var finalScore = null;
var quizEl = document.getElementById('quiz');
var quizTitleEl = document.getElementById("question-title");
var btn = document.getElementById("btn");


//Click event to start
function countdown() {
    questionOne();
    btn.style.visibility = "hidden";
    var timeLeft = 6; //NEEDS TO BE 61 SECONDS
    var timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = "time: " + timeLeft;
        //if (final question click listener) {
        // finalScore = timeLeft;
        //recordScore(finalScore);
        // clearInterval(timeInterval);
        // }
        if (timeLeft === 0) {
            finalScore = timeLeft;
            recordScore(finalScore);
            clearInterval(timeInterval);
        }
    }, 1000)
}

function questionOne() {
    var questionContainerEl = document.createElement("div");
    questionContainerEl.className = "qBox";
    var qOneButon = document.createElement("button");
    quizTitleEl.textContent = "Question #1. What is the most common way to comment your code in js?"
    //quizEl.innerHTML = "A.!!<br />" + "<br />B. //<br />" + "<br />C. **<br />" + "<br />D. ##";

    qOneButon.textContent = "!!";
    qOneButon.className = "q-btn";
    document.body.appendChild(qOneButon);

}

function questionTwo() {
    quizTitleEl.textContent = "Question #2. In js, it is not required to declare the variable before it is called"
    quizEl.innerHTML = "True<br />" + "<br />False<br />";
}

function questionThree() {
    quizTitleEl.textContent = "Question #3. Common js data types include all but which of the following?"
    quizEl.innerHTML = "A. String<br />" + "<br />B. Boolean<br />" + "<br />C. Objects<br />" + "<br />D. tinyint";
}

function questionFour() {
    quizTitleEl.textContent = "Question #4. Which of the following is not a event listener?"
    quizEl.innerHTML = "A. Mouseout<br />" + "<br />B. Click<br />" + "<br />C. Mouseover<br />" + "<br />D. All are valid";
}

function recordScore() {
    //quizEl.textContent = "GAME OVER";

}

btn.addEventListener("click", countdown);


