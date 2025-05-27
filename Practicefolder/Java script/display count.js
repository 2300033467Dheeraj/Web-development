let countNum = document.getElementById("count-num");
console.log(countNum);


let count =0;
function incrementbtn(){
    count = count + 1;
    countNum.innerText = count;
}