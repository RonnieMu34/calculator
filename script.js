let display = document.querySelector(".display");
let equals = document.getElementById("equals-button");
let clear = document.querySelector(".clear");

let firstNum = "";
let secondNum = "";
let operator = "";

let opButtons = document.getElementsByClassName("operator");
let numButton = document.getElementsByClassName("number");

var opPress = false;
var currOp = "";
var equalPress = false;
var pressedNum = "";


for (let y = 0; y < opButtons.length; y++) {
    opButtons[y].addEventListener("click", () => {
        currOp = opButtons[y].innerHTML;
        opPress = true;
    });
}

equals.addEventListener("click", () => {
    result = operate(currOp, firstNum, secondNum);
    opPress = false;
    secondNum = secondNum.toString();
    secondNum = "";
    firstNum = result;
    console.log(result);
})


// (READ) FOR SOME REASON ONLY POPPING OUT RESULT AFTER PRESSING A NUMBER BUTTON AFTER
//EQUALS BUTTON
for (let i = 0; i < numButton.length; i++) {
    numButton[i].addEventListener("click", () => {
        if (opPress == false) {
            firstNum += numButton[i].innerHTML;
            console.log(`First ${firstNum}`);
        } else if (opPress == true) {

                secondNum += numButton[i].innerHTML;
                console.log(`second ${secondNum}`);
            
        }  
    });   
}

function operate(operator, num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let result = 0;
    switch(operator) {
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
