let countEl = document.getElementById("count-el");
let count = 0;
saveEl = document.getElementById("save-el");
function increment() {
    count = count + 1;
    countEl.innerText = count;
}
function save() {
    countst =count + " - ";
    saveEl.textContent += countst ;
    countEl.innerText = 0; // Reset count display to zero
    count =0;
}