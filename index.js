// use these to update display?
let number1 = 10;
let operator = "*";
let number2 = 20;

const displayScreen = document.querySelector(".white-screen");
let operationText = document.createTextNode(number1 + operator + number2); 
displayScreen.appendChild(operationText);

// get values from user input
// store the value in variables above

if (operator === "*"){
    console.log(multiplication(number1,number2));
} else if (operator === "+") {
    console.log(addition(number1,number2));
} else if (operator === "-"){
    console.log(subtraction(number1,number2));
} else if (operator === "/"){
    console.log(division(number1,number2));
}

// already tested successfully
function addition(number1, number2){
    result = number1 + number2;
    return result
}

function subtraction(number1, number2){
    result = number1 - number2;
    return result
}

function multiplication(number1, number2){
    result = number1 * number2;
    return result
}

function division(number1, number2){
    result = number1 / number2;
    return result
}