// getting all required elements
const startBtn = document.querySelector(".start-btn button");
const infoBox = document.querySelector(".info-box");
const exitBtn = infoBox.querySelector(".buttons .quit");
const continueBtn = infoBox.querySelector(".buttons .restart");
const quizBox = document.querySelector(".quiz-box");

// if Start Quiz Button Clicked
startBtn.onclick = () =>{
    infoBox.classList.add("activeInfo"); //show the info box
}

// if Exit Quiz Button is Clicked
exitBtn.onclick = () =>{
    infoBox.classList.remove("activeInfo"); //hide the info box
}

// if continue Quiz Button is Clicked
continueBtn.onclick = () =>{
    infoBox.classList.remove("activeInfo"); //hide the info box
    quizBox.classList.add("activeQuiz"); //show the quiz box
}