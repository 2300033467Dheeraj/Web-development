let num1 = 5;
let num2 = 10;
numel = document.getElementById("num1");
numel2 = document.getElementById("num2");

sumEl = document.getElementById("sum-el");
function add() {
    sumEl.textContent= num1 + num2;
}
function sub() {
    sumEl.textContent = num1 - num2;
}
function mul() {
    sumEl.textContent= num1 * num2;
}
function div() {
    sumEl.textContent = num1 / num2;
}
