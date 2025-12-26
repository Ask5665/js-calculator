const display = document.getElementById('display');

function appendNumber(number) {
    if (number === '.') {
        const parts = display.value.split(/\+|\-|\*|\//);
        const lastNumber = parts[parts.length - 1];

        if (lastNumber.includes(".")) return;
    }
    if (display.value === "Error") display.value = "";
    display.value += number;
}

function appendOperator(operator) {
    if (display.value === "Error") display.value = "";
    if (display.value === "") return;
    const lastChar = display.value[display.value.length - 1];
    if (lastChar === " ") return;
    if ("+-*/".includes(lastChar)) return;
    display.value += operator;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}


document.addEventListener('keydown', function (event) {
    if (event.key >= '0' && event.key <= '9') {
        event.preventDefault();
        appendNumber(event.key);
    } else if (event.key === '.') {
        event.preventDefault();
        appendNumber('.');
    } else if (event.key === 'Backspace') {
        event.preventDefault();
        deleteLast();
    } else if (event.key === 'Enter' || event.key === '=') {
        event.preventDefault();
        calculateResult();
    } else if (event.key === 'Escape') {
        event.preventDefault();
        clearDisplay();
    } else if (event.key === 'Delete') {
        event.preventDefault();
        deleteLast();
    } else if (event.key === ' ') {
        event.preventDefault();
    } else if (event.key === '+') {
        event.preventDefault();
        appendOperator('+');
    } else if (event.key === '-') {
        event.preventDefault();
        appendOperator('-');
    } else if (event.key === '*') {
        event.preventDefault();
        appendOperator('*');
    } else if (event.key === '/') {
        event.preventDefault();
        appendOperator('/');
    }
});
