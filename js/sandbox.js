// getting all required elements
const start-btn = document.querySelector('.start-btn button');
const info-box = document.querySelector('.info-box');
const exit-btn = info-box.querySelector('.buttons .quit');
const continue-btn = info-box.querySelector('.buttons .restart');

// if Start Quiz Button Clicked
start-btn.onclick = () =>{
    info-box.classList.add('activeInfo'); //show the info box
}

// if Exit Quiz Button is Clicked
exit-btn.onclick = () =>{
    info-box.classList.remove('activeInfo'); //hide the info box
}

// if continue Quiz Button is Clicked
exit-btn.onclick = () =>{
    info-box.classList.remove('activeInfo'); //hide the info box
}