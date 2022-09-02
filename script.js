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
const clearButton = document.querySelector(".clear");

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

clearButton.onclick = () => clearDisplay();
