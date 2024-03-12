document.addEventListener('DOMContentLoaded', function () {
    const clearButton = document.getElementById('clearButton');
    const calcInput = document.getElementById('calc');

    clearButton.addEventListener('click', function () {
        calcInput.value = '';
    });
});

function calculate() {
    const expression = document.form1.answer.value;
    let result;

    try {
        result = eval(expression);
        document.form1.answer.value = result;
    } catch (error) {
        document.form1.answer.value = 'Error';
    }
}
