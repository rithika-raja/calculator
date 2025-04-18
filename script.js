let display = document.getElementById("display");
let result = document.getElementById("answer");
let parts;
let lastNumber;

function appendToDisplay(input) {
    display.value += input;
    result = display;
}
function calculate() {
    try {
        result.value = eval(result.value);
        document.getElementById("answer").value = eval(result.value);
    }
    catch (error) {
        document.getElementById("answer").value = "Recheck the entered values.";
    }
}
function clearDisplay() {
    display.value = "";
    answer.value = "";
}
function backSpace() {
    display.value = display.value.slice(0, -1);
}
function toAddDecimal() {
    parts = display.value.split(/[\+\-\*\/%]/);
    lastNumber = parts[parts.length - 1];
    if (!lastNumber.includes('.')) {
        display.value += '.';
    }
}

