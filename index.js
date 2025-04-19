const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculatorKeys");
const display = calculator.querySelector(".calculatorDisplay");

keys.addEventListener('click', function (e){
    if (e.target.matches('button')){ 
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType

        // Remove .is-depressed class from all keys
        Array.from(key.parentNode.children)
           .forEach(k => k.classList.remove('is-depressed'))
           
        if (!action){
            if (displayedNum === '0' || previousKeyType === 'operator'){
                display.textContent = keyContent;
            } else {
                display.textContent = displayedNum + keyContent;
            }
            console.log('number key');
        }

        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide' 
        ) {
            key.classList.add('is-depressed');
            // custom atribute
            calculator.dataset.previousKeyType = 'operator';
            calculator.dataset.firstValue = displayedNum;
            calculator.dataset.operator = action;
            console.log('operator key');
        }

        if (action === 'decimal'){
            display.textContent = displayedNum + '.';
            console.log('decimal key');
        }

        if (action === 'clear'){
            console.log('clear key');
        }

        if (action === 'calculate'){
            const firstNumber = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondNumber = displayedNum;

            display.textContent = calculate(firstNumber, operator, secondNumber);
            console.log('calculate key');
        } 

    } 
})

function calculate(firstNumber, operator, secondNumber){

    if (operator === 'add'){
        result = parseFloat(firstNumber) + parseFloat(secondNumber);
    } else if (operator === 'subtract'){
        result = parseFloat(firstNumber) - parseFloat(secondNumber);
    } else if (operator === 'multiply'){
        result = parseFloat(firstNumber) * parseFloat(secondNumber);
    } else if (operator === 'divide'){
        result = parseFloat(firstNumber) / parseFloat(secondNumber);
    }
    return result
}

