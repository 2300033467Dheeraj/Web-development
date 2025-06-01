let cards = [];
let sum = 0;
let hasBlackjack = false
let isAlive = false
let message =""
messageEl = document.getElementById("message-el")
console.log(messageEl)
sumEL = document.querySelector("#sum-el")
// querySelector is used to select the element that matches the specified selector in html to access it in JS
console.log(sumEL)
cardEl = document.getElementById("cards-el")
console.log(cardEl)

let player={
     name: "Dheeraj",
     bet:"40"
}
playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.bet

function startGame() {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    isAlive = true;
    renderGame();
}


function renderGame(){
    cardEl.textContent = "Cards: ";
    sumEL.textContent = "Sum: " + sum;
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " ";
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
    
    messageEl.textContent = message;
    

}


function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10;
        return 10;
    }
    else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
    return randomNumber;

}



function newcard(){
    if(isAlive=== true && hasBlackjack === false){
    let newcard =getRandomCard();
    cards.push(newcard);
    sum += newcard;
    renderGame();
    }

}

