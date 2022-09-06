let display = document.querySelector(".display");
let add = document.querySelector(".add-button");
let subtract = document.querySelector(".sub-button");
let multiply = document.querySelector(".mult-button");
let divide = document.querySelector(".div-button");
let equals = document.querySelector(".equals-button");
let clear = document.querySelector(".clear");

let firstNum = "";
let secondNum = "";
let operator = "";

let numButton = document.getElementsByClassName("number");

for (let i = 0; i < numButton.length; i++) {
    numButton[i].addEventListener("click", () => {
        var pressedNum = (numButton[i].innerHTML).toString();
        firstNum += pressedNum;
        console.log(firstNum);
    })
    
}

