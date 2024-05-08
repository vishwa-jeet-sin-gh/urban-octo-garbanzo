let displayValue = '';
function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}
function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}
function calculate() {
    let result = eval(displayValue);
    displayValue = result.toString();
    document.getElementById('display').value = displayValue;
}