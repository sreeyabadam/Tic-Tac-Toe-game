let boxes = document.querySelectorAll(".box");
let resetbutton = document.querySelector("#reset");
let ngbtn= document.querySelector("#new-game");
let msgContainer= document.querySelector(".msgContainer");
let msg= document.querySelector("#msg");

let turno = true;

const winpatt=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [1,4,7],
    [2,5,6],
    [0,3,6],
    [2,4,6],
];

const resetGame = () => {
    turno=true;
    enabledboxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was clicked");
        if (turno){

            box.innerText = "X";
            turno=false;
        }
        else{
            box.innerText="O";
            turno=true;
        }
        box.disabled =true;

        checkWinner();
    });
});

const disabledboxes=() =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enabledboxes=() =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
};

const showWinner= (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledboxes();
};

const checkWinner = () => {
    for(let pattern of winpatt){
        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;
        
        if(p1!="" && p2!="" && p3!=""){
            if(p1==p2 && p2==p3){
                console.log("Winner",p1);
                showWinner(p1);
            }
        }
    }
};

ngbtn.addEventListener("click",resetGame);
resetbutton.addEventListener("click",resetGame);





