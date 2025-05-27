let countNum = document.getElementById("countnum");
let count = 0;
function incrementnum(){
    count += 1;
    countNum.innerText = count;
}
function save(){
    console.log(count);
}