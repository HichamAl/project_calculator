let number1 = null;
let operator = null;
let number2 = null;

function populateDisplay(number1, operator, number2){

}

function operate(number1, operator, number2){
    if (operator === "+"){
        addition(number1, number2);

    } else if (operator === "-"){
        subtraction(number1, number2);

    } else if (operator === "*"){
        multiplication(number1, number2);
        
    } else if (operator === "/"){
        division(number1, number2);
        
    }

}

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