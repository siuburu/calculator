// Operator Functions
function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

function operate(operator, a, b) {
	return operator(a, b);
}

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const display = document.querySelector(".display");
const equalButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");
let storedValue = 0;
let operator = 0;
function updateDisplay(number) {
	display.textContent = display.textContent + number;
}
// Clear Display function with 0
function clearDisplay() {
	display.textContent = "0";
}
// Function to update display with numbers
numberButtons.forEach((button) => {
	button.addEventListener("click", () => {
		//
		if (display.textContent.includes(".") && button.textContent === ".") {
			return;
		} else if (display.textContent === "0") {
			display.textContent = "";
		}
		updateDisplay(button.textContent);
	});
});
//function that stores operator selected and current display value
operatorButtons.forEach((button) => {
	button.addEventListener("click", () => {
		if (button.className.split(" ")[1] === "equals") return;
		operator = button.className.split(" ")[1];
		storedValue = display.textContent;
		display.textContent = "0";
	});
});
//function to operate stored values and put result to display
equalButton.onclick = () =>
	(display.textContent = operate(
		this[operator],
		storedValue,
		display.textContent
	));

clearButton.onclick = () => clearDisplay();
