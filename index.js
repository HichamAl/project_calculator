// use these to update display?
let number1 = "";
let operator = "";
let number2 = "";

const displayScreen = document.querySelector(".white-screen");
const numbers = document.querySelectorAll(".numbers button");
const numberOne = document.createElement("p");
const operatorDisplayed = document.createElement("p");
const numberTwo = document.createElement("p");
displayScreen.appendChild(numberOne);
displayScreen.appendChild(operatorDisplayed);
displayScreen.appendChild(numberTwo);

numbers.forEach((numbers) => {
    // and for each one we add a 'click' listener
    numbers.addEventListener("click", () => {
        if (operator.length === 1){
            number2 += numbers.innerHTML;
        } else {
            number1 += numbers.innerHTML;
        }   
        numberOne.innerHTML = number1;
        numberTwo.innerHTML = number2;
    });
  });

const operators = document.querySelectorAll(".operators button");
operators.forEach((operators) => {
    // and for each one we add a 'click' listener
    operators.addEventListener("click", () => {
      operator += operators.innerHTML;
      operatorDisplayed.innerHTML = operator.slice(-1); // get last operator clicked
    });
  });

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