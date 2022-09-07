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
    equalPress = true;
})

for (let i = 0; i < numButton.length; i++) {
    numButton[i].addEventListener("click", () => {
        if (opPress == false) {
            firstNum += numButton[i].innerHTML;
            console.log(`First ${firstNum}`);
        } else if (opPress == true) {
            if (equalPress == false) {
                secondNum += numButton[i].innerHTML;
                console.log(`second ${secondNum}`);
            } else if (equalPress == true) {
                firstNum = parseInt(firstNum);
                secondNum = parseInt(secondNum);
                console.log(operate(currOp, firstNum, secondNum));
            }
        }
        
    });
}

// for (let i = 0; i < numButton.length; i++) {
//         var pressedNum = "";
//         numButton[i].addEventListener("click", () => {
//             if (opPress == false) {
//                 pressedNum = numButton[i].innerHTML;
//                 firstNum += pressedNum;
//                 console.log(`First is ${firstNum}`);
//             } else if (opPress == true) {
//                 presedNum = "";
//                 console.log(`Operator is ${currOp}`);
//                     if (equalPress == false) {
//                         secondNum += pressedNum;
//                         console.log(`Second is ${secondNum}`);
//                     } else if (equalPress == true) {
//                         firstNum = parseInt(firstNum);
//                         secondNum = parseInt(secondNum);
//                         console.log(`${firstNum} -> ${secondNum}`)
                        
//                     }
//                     console.log(operate(currOp, firstNum, secondNum));
//             }
//         });  
// }

function operate(operator, num1, num2) {
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
