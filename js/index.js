const display = document.querySelector('.display');
const digits = document.querySelectorAll('.digits button');
digits.forEach( btn => btn.addEventListener('click', digitPressed) );
function digitPressed(e) {
    e.preventDefault();
    display.value += e.target.innerText;
}
const opers = document.querySelectorAll('.opers button');
opers.forEach( btn => btn.addEventListener('click', operPressed) );
function operPressed(e) {
    e.preventDefault();
    display.value += e.target.innerText;
}

document.querySelector('.equal').addEventListener('click', equalPressed);
function equalPressed(e) {
    e.preventDefault();
    display.value = eval(display.value);
}

let num1 = '';
let num2 = '';
let operator = '';
let total = '';
(document).ready(function() {
    ('button').on('click', function(e) {
        let btn = e.target.innerHTML;
        if (btn >= '0' && btn <= '9') {
            handleNumber(btn);
        } else {
            handleOperator(btn);
        }
    });
});
function handleNumber(num) {
    if (num1 === '') {
        num1 = num;
    } else {
        num2 = num;
    }
    displayButton(num);
}
function handleOperator(oper) {
    if (operator === '') {
        operator = oper;
    } else {
        handleTotal();
        operator = oper;
    }
}
function handleTotal() {
    switch (operator) {
        case '+':
            total = +num1 + +num2;
            displayButton(total);
            break;
        case '-':
            total = +num1 - +num2;
            displayButton(total);
            break;
        case '/':
            total = +num1 / +num2;
            displayButton(total);
            break;
        case 'X':
            total = +num1 * +num2;
            displayButton(total);
            break;
    }
    updateVariables();
}
function displayButton(btn) {
    ('.calc-result-input').text(btn);
}
function updateVariables() {
    num1 = total;
    num2 = '';
}