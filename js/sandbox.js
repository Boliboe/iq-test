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
    showQuestions(0);
}

let queCount = 0;

const nextBtn = quizBox.querySelector(".next-btn");

//if Next Button is Clicked
nextBtn.onclick = () => {
    if(queCount < questions.length - 1){
        queCount++;
        showQuestions(queCount);
    }else{
        console.log("Questions completed")
    }
}

//getting questions and options from array
function showQuestions(index){
    const queText = document.querySelector(".que-text");
    const optionList = document.querySelector(".option-list");
    let queTag = '<span>' + questions[index].question + '</span>';
    let optionTag = '<div class="option">' + questions[index].options[0] + '<span></span></div>'
                    + '<div class="option">' + questions[index].options[1] + '<span></span></div>'
                    + '<div class="option">' + questions[index].options[2] + '<span></span></div>'
                    + '<div class="option">' + questions[index].options[3] + '<span></span></div>';
    queText.innerHTML = queTag;
    optionList.innerHTML = optionTag;
}
