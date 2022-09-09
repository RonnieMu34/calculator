let display = document.querySelector(".display");
let equals = document.getElementById("equals-button");
let clear = document.querySelector(".clear");

var currResult = "";
var nextNum = "";
let operator = "";

let opButtons = document.getElementsByClassName("operator");
let numButton = document.getElementsByClassName("number");

var opPress = false;
var currOp = "";
var equalPress = false;
var pressedNum = "";


for (let y = 0; y < opButtons.length; y++) {
    let nextOp = "";
    opButtons[y].addEventListener("click", () => {
        if (nextNum == "") {
            currOp = opButtons[y].innerHTML;
            console.log(`${currOp} pressed`);
        }
        if (nextNum != "") {
            nextOp = opButtons[y].innerHTML;
            currResult = operate(currOp, currResult, nextNum);
            nextNum = "";
            currOp = nextOp;
            console.log(currResult);
        }
    })
}

equals.addEventListener("click", () => {
    result = operate(currOp, currResult, nextNum);
    nextNum = "";
    currResult = result;
    console.log(result);
})

for (let i = 0; i < numButton.length; i++) {
    numButton[i].addEventListener("click", () => {
        if (currOp == "") {
            currResult += numButton[i].innerHTML;
            console.log(`currResult is ${currResult}`);
        } else {
            nextNum += numButton[i].innerHTML;
            console.log(`nextNum is ${nextNum}`);
        }
    });
}

function operate(operator, num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let result = 0;
    switch (operator) {
        case "+":
            result = (num1 + num2);
            break;
        case "-":
            result = (num1 - num2);
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
    return result;
}
