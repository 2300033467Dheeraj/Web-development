let num1=11;
let num2=9;
let cards = [num1, num2];
let sum = num1 + num2;
let hasBlackjack = false
let isAlive = true
let message =""
messageEl = document.getElementById("message-el")
console.log(messageEl)
sumEL = document.querySelector("#sum-el")
// querySelector is used to select the element that matches the specified selector in html to access it in JS
console.log(sumEL)
cardEl = document.getElementById("cards-el")
console.log(cardEl)

function startGame() {
    renderGame();
}

function renderGame(){

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
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " ";
    }
}
function newcard(){
    console.log("Drawing a new card from the deck!")

    let newcard =4;
    cards.push(newcard);
    
    sum += newcard;
    renderGame();

}

