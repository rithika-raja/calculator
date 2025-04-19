let display = document.getElementById("display");
let result = document.getElementById("answer");
let parts;
let lastNumber;

function backSpace() {
    display.value = display.value.slice(0, -1);
    result.value = eval(display.value);
    if (display.value === "") {
        display.value = " ";
        answer.value = " ";  
    }
}

function appendToDisplay(input) {
    display.value += input;
    // result = display;
    result.value = eval(display.value);
}
function calculate() {
    try {
        // result.value = eval(result.value);
        document.getElementById("display").value = eval(result.value);
        answer.value = "";
    }
    catch (error) {
        // document.getElementById("answer").value = "Recheck the entered values.";
        alert("Recheck the entered values.");
    }
}
function clearDisplay() {
    display.value = "";
    answer.value = "";
}

function toAddDecimal() {
    parts = display.value.split(/[\+\-\*\/%]/);
    lastNumber = parts[parts.length - 1];
    if (!lastNumber.includes('.')) {
        display.value += '.';
    }
}

function toAddOperator(op) {
    let lastChar = display.value.slice(-1);  // Get last typed character

    // Only allow operator if last character is NOT already an operator
    if (display.value !== "" && !/[+\-*/%]/.test(lastChar)) {
        display.value += op;
    }

    // Special case: allow "-" if display is empty (to type a negative number)
    else if (display.value === "" && op === "-") {
        display.value += op;
    }
}
