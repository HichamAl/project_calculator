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

      if (value == "AC"){
        number1 = "";
        number2 = "";
        operator = "";
        display.textContent = "0";
      }

      if (isNaN(value) == false && operator == ""){
        number1 += value;
        display.textContent = "";
        display.append(number1);
      }

      if (value == "/" || value == "x" || value == "-" || value == "+"){
        if (number1 != ""){
          operator += value;
          display.textContent = "";
          display.append(`${number1} ${operator.slice(-1)} ${number2}`);
        }
      }

      if (isNaN(value) == false && operator.length > 0){
        number2 += value;
        display.textContent = "";
        display.append(`${number1} ${operator.slice(-1)} ${number2}`);
      }

      // Hardest part !!
      if (value == "=" && number1 != "" && number2 != "" && operator != ""){
        let result  = operate(number1, operator.slice(-1), number2);
        let roundedResult = Math.round(result * 100) / 100;
        display.textContent = "";
        display.append(`${number1} ${operator.slice(-1)} ${number2} = ${roundedResult}`);

        number1 = roundedResult;
        operator = "";
        number2 = "";

      }   
      
      if (value == "+" && number1 != "" && number2 != "" && operator != "" ||
          value == "-" && number1 != "" && number2 != "" && operator != "" ||
          value == "x" && number1 != "" && number2 != "" && operator != "" ||
          value == "/" && number1 != "" && number2 != "" && operator != "") {
        
          let result  = operate(number1, operator.slice(-2, -1), number2);
          let roundedResult = Math.round(result * 100) / 100;
          display.textContent = "";
          display.append(`${number1} ${operator.slice(-2, -1)} ${number2} = ${roundedResult}`);

          number1 = roundedResult;
          number2 = "";
          console.log(operator.slice(-1));

          if (isNaN(value) == false ){
            number2 += value;
            display.textContent = "";
            display.append(`${number1} ${operator.slice(-1)} ${number2}`);
          }
      }
    });
  });


