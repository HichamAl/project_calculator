// This project is difficult 
let number1 = "";
let number2 = "";
let operator = "";

const display = document.querySelector(".display");
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.innerHTML;
      console.log(typeof(value));
      console.log(value);

      // eerst happy path dat alles perfect gaat eerst 2 cijfers dan
      // operator dan weer 2 cijfers 

      console.log(isNaN(value));
      if (isNaN(value) == false){
        number1 += value;

        display.textContent = "";

        display.append(number1);

        console.log(number1);
      }
    
    });
  });


// this function makes the calculator work unlimited amount of times
function operate (number1, operator, number2){
    
}

function add (number1, number2){
    let result = Number(number1) + Number(number2);
    console.log(result);
}

function subtract (number1, number2){
    let result = Number(number1) - Number(number2);
    console.log(result);
}

function multiplication (number1, number2){
    let result = Number(number1) * Number(number2);
    console.log(result);
}

function divide (number1, number2){
    let result = Number(number1) / Number(number2);
    console.log(result);
}

