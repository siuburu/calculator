// Operator Functions
function add(a, b) {
	//Number function to make sure to not concat strings.
	return Number(a) + Number(b);
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	if (b === "0") return "Bruh...";
	else return a / b;
}

function sqr(a, b) {
	return Math.pow(a, b);
}
function modulus(a, b) {
	if (b === "0") return "Bruh...";
	return a % b;
}
function operate(operator, a, b) {
	if (operator == null) return;
	else return operator(a, b);
}

function fraction(a) {
	if (a === "0") return "Bruh...";
	return 1 / Number(a);
}

function roundNumber(number) {
	return +parseFloat(number).toFixed(4);
}

function checkOperator(operator) {
	switch (operator) {
		case "+":
			return add;
			break;
		case "-":
			return subtract;
			break;
		case "/": //for the keyboard
			return divide;
			break;
		case "÷": //for the button
			return divide;
		case "*":
			return multiply;
			break;
		default:
			return null;
	}
}
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const display = document.querySelector(".display");
const equalButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");
const clearEntryButton = document.querySelector(".clearEntry");
const backspaceButton = document.querySelector(".backspace");
const sqrtButton = document.querySelector(".sqrt");
const negateButton = document.querySelector(".negate");
const fractionButton = document.querySelector(".fraction");
let storedValue = 0;
let operator = null;
//input numbers to display
function updateDisplay(number) {
	if (number === undefined) number = 0;
	if (number.toString().length > 9 && number.toString().includes(".")) {
		number = roundNumber(number);
	}
	display.textContent = number;
}
// Clear Display function with 0
function clearDisplay() {
	updateDisplay("0");
}
// Function to update display with numbers
numberButtons.forEach((button) => {
	button.addEventListener("click", () => {
		if (display.textContent.includes(".") && button.textContent === ".") {
			return;
		} else if (
			display.textContent === "0" ||
			display.textContent === storedValue
		) {
			updateDisplay("");
		}
		updateDisplay(display.textContent + button.textContent);
	});
});
//function that stores operator selected and current display value
operatorButtons.forEach((button) => {
	button.addEventListener("click", () => {
		if (operator !== null)
			updateDisplay(operate(this[operator], storedValue, display.textContent));
		operator = checkOperator(button.textContent);
		storedValue = display.textContent;
		//display.textContent = "0";
	});
});

sqrtButton.onclick = () => updateDisplay(Math.sqrt(display.textContent));
negateButton.onclick = () => updateDisplay(display.textContent * -1);
fractionButton.onclick = () => {
	updateDisplay(fraction(display.textContent));
};
//function to operate stored values and put result to display
equalButton.onclick = () => {
	updateDisplay(operate(operator, storedValue, display.textContent));
};

clearEntryButton.onclick = () => {
	clearDisplay();
};
clearButton.onclick = () => {
	storedValue = 0;
	operator = null;
	clearDisplay();
};

backspaceButton.onclick = () => {
	updateDisplay(display.textContent.slice(0, display.textContent.length - 1));
	if (display.textContent === "") updateDisplay(0);
};

document.addEventListener("keydown", (event) => {
	const operatorArray = ["+", "*", "/", "-"];

	if (isFinite(event.key) || event.key === ".") {
		if (display.textContent.includes(".") && event.key === ".") {
			return;
		} else if (
			display.textContent === "0" ||
			display.textContent === storedValue
		) {
			updateDisplay("");
		}
		updateDisplay(display.textContent + event.key);
	} else if (operatorArray.includes(event.key)) {
		storedValue = display.textContent;
		if (operator !== null)
			updateDisplay(operate(this[operator], storedValue, display.textContent));
		operator = checkOperator(event.key);
	} else if (event.key === "=")
		updateDisplay(operate(operator, storedValue, display.textContent));
	else if (event.key === "Backspace") {
		updateDisplay(display.textContent.slice(0, display.textContent.length - 1));
		if (display.textContent === "") updateDisplay(0);
	}
});
