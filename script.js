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
	return operator(a, b);
}

function fraction(a) {
	if (a === "0") return "Bruh...";
	return 1 / Number(a);
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
		operator = button.className.split(" ")[1];
		storedValue = display.textContent;
		display.textContent = "0";
	});
});

sqrtButton.onclick = () =>
	(display.textContent = Math.sqrt(display.textContent));
negateButton.onclick = () => (display.textContent = display.textContent * -1);
fractionButton.onclick = () => {
	console.log(display);
	display.textContent = fraction(display.textContent);
};
//function to operate stored values and put result to display
equalButton.onclick = () => {
	display.textContent = operate(
		this[operator],
		storedValue,
		display.textContent
	);
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
	display.textContent = display.textContent.slice(
		0,
		display.textContent.length - 1
	);
	if (display.textContent === "") display.textContent = 0;
};
