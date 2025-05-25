let number1 = "10";
let number2 = "5";
let operator = "-";


function operate (number1, operator, number2){
    if (operator == "+"){
        console.log(add(number1, number2));
    }
    if (operator == "-"){
        console.log(subtract(number1, number2));
    }
    if (operator == "*"){
        console.log(multiplication(number1, number2));
    }
    if (operator == "/"){
        console.log(divide(number1, number2));
    }
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

