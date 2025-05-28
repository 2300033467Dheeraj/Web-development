let num1=11;
let num2=10;
let sum = num1 + num2;
let hasBlackjack = false
let isAlive = true
let message =""
messageEl = document.getElementById("message-el")
console.log(messageEl)
sumEL = document.getElementById("sum-el")
console.log(sumEL)
cardEl = document.getElementById("cards-el")
console.log(cardEl)
function startGame(){

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
    messageEl.textContent = message;
    sumEL.textContent = "Sum: " + sum;
    cardEl.textContent = "Cards: " + num1 + ", " + num2;
}