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
    console.log(count); 
}