errorel=document.getElementById("error");
console.log(errorel);
function purchase(){
    console.log("purhased");
    errorel.textContent = "You have successfully purchased the item!";
}