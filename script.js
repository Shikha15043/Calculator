let currentInput = '';
let currentOperator = '';
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (currentInput !== '') {
        if (currentOperator !== '') {
            calculate();
        }
        currentOperator = operator;
        previousInput = currentInput;
        currentInput = '';
        updateDisplay();
    }
}

function calculate() {
    if (previousInput !== '' && currentInput !== '' && currentOperator !== '') {
        previousInput = parseFloat(previousInput);
        currentInput = parseFloat(currentInput);
        switch (currentOperator) {
            case '+':
                currentInput = previousInput + currentInput;
                break;
            case '-':
                currentInput = previousInput - currentInput;
                break;
            case '*':
                currentInput = previousInput * currentInput;
                break;
            case '/':
                if (currentInput !== 0) {
                    currentInput = previousInput / currentInput;
                } else {
                    currentInput = 'Error';
                }
                break;
        }
        currentOperator = '';
        previousInput = '';
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = '';
    currentOperator = '';
    previousInput = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}
