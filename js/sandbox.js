// getting all required elements
const startBtn = document.querySelector(".start-btn button");
const infoBox = document.querySelector(".info-box");
const exitBtn = infoBox.querySelector(".buttons .quit");
const continueBtn = infoBox.querySelector(".buttons .restart");
const quizBox = document.querySelector(".quiz-box");
const timeCount = quizBox.querySelector(".timer .timer-sec");
const timeLine = quizBox.querySelector("header .time-line");

const optionList = document.querySelector(".option-list");


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
    showQuestions(0);
    queCounter(1);
    startTimer(15);
    startTimerLine(0);
}

let queCount = 0;
let queNumb = 1;
let counTer;
let timeValue = 15;
let widthValue =0;

const nextBtn = quizBox.querySelector(".next-btn");

//if Next Button is Clicked
nextBtn.onclick = () => {
    if(queCount < questions.length - 1){
        queCount++;
        queNumb++;
        showQuestions(queCount);
        queCounter(queNumb);
        clearInterval(counTer);
        startTimer(timeValue);
        clearInterval(counTerLine);
        startTimerLine(widthValue);
        nextBtn.style.display = "none";
    }else{
        console.log("Questions completed")
    }
}

//getting questions and options from array
function showQuestions(index){
    const queText = document.querySelector(".que-text");
    let queTag = '<span>' + questions[index].numb + "." + questions[index].question+ '</span>';
    let optionTag = '<div class="option">' + questions[index].options[0] + '<span></span></div>'
                    + '<div class="option">' + questions[index].options[1] + '<span></span></div>'
                    + '<div class="option">' + questions[index].options[2] + '<span></span></div>'
                    + '<div class="option">' + questions[index].options[3] + '<span></span></div>';
    queText.innerHTML = queTag;
    optionList.innerHTML = optionTag;
    const option = optionList.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

let tickIcon ='<div class="icon tick"><i class="ri-sun-line sun-icon"></i></i></div>';
let crossIcon ='<div class="icon cross"><i class="ri-moon-line moon-icon"></i></i></div>';

function optionSelected(answer){
    clearInterval(counTer);
    clearInterval(counTerLine);
    let userAns = answer.textContent;
    let correctAns = questions[queCount].answer;
    let allOptions = optionList.children.length;
    if(userAns == correctAns){
        answer.classList.add("correct");
        console.log("Answer is correct");
        answer.insertAdjacentHTML("beforeend", tickIcon);
    }else{
        answer.classList.add("incorrect");
        console.log("Answer is wrong");
        answer.insertAdjacentHTML("beforeend", crossIcon);

        //if answers is incorrect then automatically selected the correct answer
        for (let i = 0; i < allOptions; i++) {
            if(optionList.children[i].textContent == correctAns){
                optionList.children[i].setAttribute("class","option correct");
                optionList.children[i].insertAdjacentHTML("beforeend", tickIcon);
            }
        }
    }

    //when user selected disabled all options
    for (let i = 0; i < allOptions; i++) {
        optionList.children[i].classList.add("disabled");
    }
    nextBtn.style.display = "block";
}

function startTimer(time){
    counTer = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if (time < 9){
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
        if(time < 0){
            clearInterval(counTer);
            timeCount.textContent = "00";
        }
    }
}

function startTimerLine(time){
    counTerLine = setInterval(timer, 29);
    function timer(){
        time += 1;
        timeLine.style.width = time + "px";
        if (time > 549){
            clearInterval(counTerLine);
        }
    }
}

function queCounter(index){
    const bottomQuesCounter = quizBox.querySelector(".total-que");
    let totalQuesCountTag = '<span><p>' + index + '</p>of<p>' + questions.length + '</p>Questions</span>';
    bottomQuesCounter.innerHTML = totalQuesCountTag;
}