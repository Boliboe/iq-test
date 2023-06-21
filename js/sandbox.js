// getting all required elements
const startBtn = document.querySelector(".start-btn button");
const infoBox = document.querySelector(".info-box");
const exitBtn = infoBox.querySelector(".buttons .quit");
const continueBtn = infoBox.querySelector(".buttons .restart");
const quizBox = document.querySelector(".quiz-box");
// const timeCount = quizBox.querySelector(".timer .timer-sec");

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
}

let queCount = 0;
let queNumb = 1;

const nextBtn = quizBox.querySelector(".next-btn");

//if Next Button is Clicked
nextBtn.onclick = () => {
    if(queCount < questions.length - 1){
        queCount++;
        queNumb++;
        showQuestions(queCount);
        queCounter(queNumb);
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
}

function queCounter(index){
    const bottomQuesCounter = quizBox.querySelector(".total-que");
    let totalQuesCountTag = '<span><p>' + index + '</p>of<p>' + questions.length + '</p>Questions</span>';
    bottomQuesCounter.innerHTML = totalQuesCountTag;
}