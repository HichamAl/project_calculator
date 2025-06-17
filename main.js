// This project is difficult 
let number1 = "";
let operator = "";
let number2 = "";

// this function makes the calculator work unlimited amount of times
function operate (number1, operator, number2){
  if (operator == "+"){
    return add(number1, number2);
  }
  if (operator == "-"){
    return subtract(number1, number2);
  }
  if (operator == "/"){
    return divide(number1, number2);
  }
  if (operator == "x"){
    return multiplication(number1, number2);
  }
}


function add (number1, number2){
    let result = Number(number1) + Number(number2);
    return result
}

function subtract (number1, number2){
    let result = Number(number1) - Number(number2);
    return result
}

function multiplication (number1, number2){
    let result = Number(number1) * Number(number2);
    return result
}

function divide (number1, number2){
    let result = Number(number1) / Number(number2);
    return result
}

const display = document.querySelector(".display");
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.innerHTML;
      // eerst happy path dat alles perfect gaat eerst 2 cijfers dan
      // operator dan weer 2 cijfers 

      if (isNaN(value) == false && operator == ""){
        number1 += value;
        display.textContent = "";
        display.append(number1);
        console.log(number1);
        console.log(operator.length);
      }

      if (value == "/" || value == "x" || value == "-" || value == "+" ){
        operator += value;
        display.textContent = "";
        display.append(`${number1} ${operator}`);
        console.log(operator);
        console.log(operator.length);
      }

      if (isNaN(value) == false && operator.length > 0){
        number2 += value;
        display.textContent = "";
        display.append(`${number1} ${operator} ${number2}`);
        console.log(number2);
        console.log(operator.length);

      }

      // Hardest part !!
      if (value == "="){
        let result  = operate(number1, operator, number2);
        display.textContent = "";
        display.append(`${number1} ${operator} ${number2} = ${result}`);
      }
     
    
    });
  });


