let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-contianer");
let msg = document.querySelector("#msg");
let msgHide = document.querySelector(".hide");


let turn0 = true;
let count = 0;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () =>{
    turn0 = true;
    count = 0;
    enabledBoxes();
    msgHide.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText = "O";
            box.style.color = "#84e317";
            turn0 = false;
            
        }
        else{
            box.innerText = "X";
            box.style.color = "#e3d80b"; 
            turn0 = true;
        }
        box.disabled = true;
        count++;
        let isWinner = checkWinner();

        if(count == 9 && !isWinner){
            gameDraw();
        }
    });
});

let gameDraw = () =>{
    msg.innerText = "Game is Draw!";
    msgHide.classList.remove("hide");
    disabledBoxes();
}

const disabledBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enabledBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};



const checkWinner = () =>{
    for( let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val= boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
           
        }
        
    }
};
const showWinner= (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgHide.classList.remove("hide");
    disabledBoxes();
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);