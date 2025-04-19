const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculatorKeys");

keys.addEventListener('click', function (e){
    if (e.target.matches('button')){ 
        const key = e.target;
        const action = key.dataset.action;

        if (!action){
            console.log('number key');
        }

        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide' 
        ) {
            console.log('operator key');
        }

        if (action === 'decimal'){
            console.log('decimal key');
        }

        if (action === 'clear'){
            console.log('clear key');
        }

        if (action === 'calculate'){
            console.log('calculate key');
        }
        
    }

    

})




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