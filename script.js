let display = document.querySelector(".display");
// let add = document.querySelector(".add-button");
// let subtract = document.querySelector(".sub-button");
// let multiply = document.querySelector(".mult-button");
// let divide = document.querySelector(".div-button");
let equals = document.querySelector(".equals-button");
let clear = document.querySelector(".clear");

let firstNum = "";
let secondNum = "";
let operator = "";

let opButtons = document.getElementsByClassName("operator");
let numButton = document.getElementsByClassName("number");

let opPress = false;
let equalPress = false;

for (let i = 0; i < numButton.length; i++) {

    while (opPress == false && equalPress == false) {
        
        numButton[i].addEventListener("click", () => {
            var pressedNum = numButton[i].innerHTML;
            firstNum += pressedNum;
        });
    }
}

function operate(operator, num1, num2) {
    var result = 0;
    switch(operator) {
        case "+":
            result = (num1 + num2);
            break;
        case "-":
            resuolt = (num1 - num2);
            break;
        case "x":
            result = (num1 * num2);
            break;
        case "÷":
            result = (num1 / num2);
            break;
        default:
            alert("Please enter 2 values");                
    }
}
