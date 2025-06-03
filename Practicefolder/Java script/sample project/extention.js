let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
let ulEl = document.getElementById("ul-el");
console.log(ulEL)
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    inputEl.value = "";
    renderLeads();

})
function renderLeads() {
    let listItem = " ";
    for (let i = 0; i < myLeads.length; i++) {
        ulEL.innerHTML += 
        `
            <li>
                <a target = '_blank' href='${myLeads[i]}'>
                ${myLeads[i]}
                </a>
            </li>
        ` ;
    }
    ulEl.innerHTML = listItem;
}