let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard

// Write the conditional according to these rules:

// if less than or equal to 20 -> "Do you want to draw a new card? π"
// else if exactly 21 -> "Wohoo! You've got Blackjack! π₯³"
// else -> "You're out of the game! π­"
if (sum <= 20) {
    console.log('Do you want to draw a new card?!! βΊοΈ')
} else if (sum === 21) {
    console.log("Wohoo! You've got BlackJack! π₯³")
} else {
    console.log("You're out of the game! π­")
}



