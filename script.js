
//simon game;

let computerArray = [];
let userArray = [];   
let isComputerTurn = true;

const boxes = ["green","red","orange","blue"];
// const boxes_audio = [""];

let score = document.getElementsByClassName('score-count')[0];
let restart = document.getElementsByClassName('restart')[0];
let startHead = document.getElementsByClassName('start')[0];
score.innerHTML = 0;



const start=()=>{

        restart.classList.add('display-none');
        startHead.innerHTML = "Watch";
      
        let box_ele = boxes[Math.floor(4 * Math.random())];
        computerArray.push(box_ele);

        for(var i = 0;i < computerArray.length;i++){
            let element = document.getElementsByClassName(computerArray[i])[0];
            element.classList.remove('opacity');
            
            setTimeout(()=>{
                element.classList.add('opacity');
            },500)        
        }

        isComputerTurn = false;
        setTimeout(()=>{
            startHead.innerHTML = "Play";
        },2000);
}



boxes.forEach(item=>{
    let element = document.getElementsByClassName(item)[0];

    element.addEventListener('click', function(){

        debugger;
        if(isComputerTurn){
            return;
        }
            
        userArray.push(item);
        element.classList.remove('opacity');
        
        setTimeout(()=>{
                element.classList.add('opacity');
        },1000);

        if(!(userArray[userArray.length - 1] === computerArray[userArray.length - 1])){
            document.getElementsByClassName('start')[0].innerHTML = "Game Over";
            score.innerHTML = 0;
            computerArray = [];
            userArray = [];
            restart.classList.remove('display-none');
        }
        else if(userArray.length === computerArray.length){
            setTimeout(()=>{
                isComputerTurn = true;
                start();
            },1000);
            score.innerHTML++;
            userArray = [];
        }
    })
})


restart.addEventListener('click',start);
start();


