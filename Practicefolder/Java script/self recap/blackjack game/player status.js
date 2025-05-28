let num1=11;
let num2=11;
let sum = num1 + num2;
let hasBlackjack = false
let isAlive = true
if (sum < 21) {
    console.log("Do you want to draw a new card?");
}
else if (sum === 21) {
    console.log("You've got Blackjack!");
    hasBlackjack = true
} else {
    console.log("You're out of the game!");
    isAlive = false;
}
console.log(hasBlackjack);
console.log(isAlive);