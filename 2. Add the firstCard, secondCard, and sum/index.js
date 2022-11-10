// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

let firstCard = 10
let secondCard = 17

let sum = firstCard + secondCard

if (sum < 21) {
    console.log('Do you want to draw a new card?!! ☺️')
} else if (sum === 21) {
    console.log("Wohoo! You've got BlackJack! 🥳")
} else {
    console.log("You're out of the game! 😭")
}
