
const boxes = document.querySelectorAll(".box");

let boxesClickedByComputer = [];
let boxesClickedByUser = [];

document.getElementsByClassName('score-count')[0] = 0;
let restartButton = document.getElementsByClassName('restart')[0];


function displayRandomColor(){

    restartButton.classList.add('display-none');
    document.getElementsByClassName('start')[0].innerHTML = "Watch";
    const randomBox = Math.floor(4*Math.random());
    boxes[randomBox].classList.remove('opacity');
    setTimeout(()=>{
        boxes[randomBox].classList.add('opacity');
        document.getElementsByClassName('start')[0].innerHTML = "Play";
    },250);
    boxesClickedByComputer.push(boxes[randomBox]);
    
}

function startListeningForClicksOnBoxes(){
    boxes.forEach(box=>{
        box.addEventListener('click',onBoxClick);
    })
}

function onBoxClick(event){
    const box = document.getElementById(event.target.id);
    boxesClickedByUser.push(box);
    displayFadeInFadeOutBox(box);
    checkBoxesByUserAndComputer(boxesClickedByUser,boxesClickedByComputer);
}

function displayFadeInFadeOutBox(box){
    box.classList.remove('opacity');
    setTimeout(()=>{
        box.classList.add('opacity');
    },150);

}

function checkBoxesByUserAndComputer(userBoxes,computerBoxes){
    
    if(userBoxes[userBoxes.length-1] !== computerBoxes[userBoxes.length -1]){
        document.getElementsByClassName('start')[0].innerHTML = "Game Over";
        boxes.forEach(box=>{
            box.removeEventListener('click',onBoxClick);
        })
       
        restartButton.classList.remove('display-none');
    }
    else if(userBoxes.length === computerBoxes.length){
        boxesClickedByUser = [];
        setTimeout(displayRandomColor,500);
        document.getElementsByClassName('score-count')[0].innerHTML++;
    }    
}

restartButton.addEventListener('click',restartGame);

function restartGame(){
    boxesClickedByComputer = [];
    boxesClickedByUser = [];
    displayRandomColor();
    startListeningForClicksOnBoxes();
    document.getElementsByClassName('score-count')[0].innerHTML = 0;
}

startListeningForClicksOnBoxes();
displayRandomColor();



