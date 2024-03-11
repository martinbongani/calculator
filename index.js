// Program for a simple calculator
// Take the operator input

// Take the operand input

const clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click' , function () {
    document.getElementById('display').value = '';
});


let result;

switch (operator) {
    case '+':
        result = number1 + number2;
        break;
    case '-':
        result = number1 - number2;
        break;
    case '*':
        result = number1 * number2;
        break;
    case '/':
        result = number1 / number2;
        break;
    default:
        result = 'Invalid operator';
}

console.log(`Result: ${result}`);
