const display = document.getElementById('display');

// Функция за изчистване на дисплея
function clearDisplay() {
    display.innerText = '0';
}

// Функция за добавяне на стойност към дисплея
function appendToDisplay(value) {
    if (display.innerText === '0') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

// Функция за изчисляване на израза
function calculate() {
    try {
        // Заменя операторите за правилна интерпретация
        display.innerText = eval(display.innerText.replace('×', '*').replace('÷', '/'));
    } catch {
        display.innerText = 'Error';
    }
}
