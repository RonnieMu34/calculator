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
var digitsInput = 0;

clear.addEventListener("click", () => {
    digitsInput = 0;
    display.innerHTML = "0";
    currOp = "";
    nextOp = "";
    currResult = "";
    nextNum = "";
})

for (let y = 0; y < opButtons.length; y++) {
    let nextOp = "";
    opButtons[y].addEventListener("click", () => {
        digitsInput = 0;
        if (nextNum == "") {
            currOp = opButtons[y].innerHTML;
        }
        if (nextNum != "") {
            nextOp = opButtons[y].innerHTML;
            currResult = operate(currOp, currResult, nextNum);
            nextNum = "";
            currOp = nextOp;
            display.innerHTML = Number(currResult.toFixed(3));
        }
    })
}

equals.addEventListener("click", () => {
    result = operate(currOp, currResult, nextNum);
    nextNum = "";
    currResult = result;
    display.innerHTML = Number(result.toFixed(3));
})

for (let i = 0; i < numButton.length; i++) {
    numButton[i].addEventListener("click", () => {
        digitsInput++;
        if (digitsInput >= 8) {
            currResult += "";
        } else if (currOp == "") {
            currResult += numButton[i].innerHTML;
            display.innerHTML = currResult;
        } else {
            nextNum += numButton[i].innerHTML;
            display.innerHTML = nextNum;
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
            if (num2 == 0) {
                digitsInput = 0;
                display.innerHTML = "0";
                currOp = "";
                nextOp = "";
                currResult = "";
                nextNum = "";
                result = "";
                alert("Hey. Stop that >:(");
            } else {
                result = (num1 / num2);
            }
            break;
        default:
            alert("Please enter 2 values");
    }
    return result;
}
