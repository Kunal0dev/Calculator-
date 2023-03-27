let equation = '';
let decimal = false;

function updateDisplay(value) {
  const display = document.getElementById('display');
  if (value === '.') {
    if (decimal) {
      return;
    }
    decimal = true;
  }
  equation += value;
  display.value = equation;
}

function clearDisplay() {
  const display = document.getElementById('display');
  equation = '';
  decimal = false;
  display.value = '';
}

function backspace() {
  const display = document.getElementById('display');
  equation = equation.slice(0, -1);
  display.value = equation;
}

function calculate() {
  const display = document.getElementById('display');
  const result = eval(equation);
  display.value = result;
  equation = result.toString();
}
``
