// number guessing game

const prompt = require("prompt-sync")();
// import { Math } from "mathjs",

let secretNumber = Math.floor(Math.random() * 100) + 1;
let guess;
let attempts = 0;

while (guess !== secretNumber) {
    guess = parseInt(prompt("Guess a number between 1 and 100:"));
    attempts++;

    if (guess === secretNumber) {
        console.log("congratulation! You guessed the number.");
    } else{
        console.log("Sorry, that's not the right number.");
    }
}
console.log(`You made ${attempts} attempts.`);