let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-button");
let newgame = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true; // jab 0 player ki turn hogi
//storing winning patterns in form of 2-d array
const win = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () =>{
    turn0 = true;
    enableBoxed();
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        console.log("box was clicked");
        if(turn0)
        {
            box.innerText = "0";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxed = () =>{
    for(let box of boxes)
        box.disabled = true;
}

const enableBoxed = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }

}

const showWinner = (winner) =>{
    msg.innerText = `Congratulations!! The winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxed();
}

const checkWinner = () =>{
    for(let pattern of win){
        let pos1v = boxes[pattern[0]].innerText;
        let pos2v = boxes[pattern[1]].innerText;
        let pos3v = boxes[pattern[2]].innerText;

        if(pos1v != "" && pos2v != "" && pos3v != "")
            {
                if(pos1v === pos2v && pos2v === pos3v)
                {
                    console.log("Winner is", pos1v);
                    showWinner(pos1v);
                }
            }
    }
};

newgame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);