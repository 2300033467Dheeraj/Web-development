let num1=11;
let num2=11;
let sum = num1 + num2;
let hasBlackjack = false
let isAlive = true
let message =""
function startgame(){
    
}

if (sum < 21) {
    message = "Do you want to draw a new card?"
}
else if (sum === 21) {
    message ="You've got Blackjack!"
    hasBlackjack = true
} else {
    message ="You're out of the game!"
    isAlive = false;
}
console.log(message);
console.log("does have black jack: " +hasBlackjack);
console.log("is he in game: "+ isAlive);