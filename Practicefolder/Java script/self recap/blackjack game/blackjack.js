let card1= 5;
let card2= 10;
let sum = card1 + card2;
if (sum < 21) {
    console.log("Do you want to draw a new card?");
}
else if (sum === 21) {
    console.log("You've got Blackjack!");
}
else {
    console.log("You're out of the game!");
}