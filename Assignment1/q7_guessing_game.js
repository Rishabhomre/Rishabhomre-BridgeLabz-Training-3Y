// Q7: Smart Guessing Game

// Generate a random secret number between 1 and 50
let secretNumber = Math.floor(Math.random() * 50) + 1;

// Test value for the user's guess (change this value to test)
let userGuess = 25;

// Check the user's guess
if (userGuess === secretNumber) {
    console.log("Correct guess!");
} else {
    // Check whether the guess is within 3 of the secret number
    if (Math.abs(userGuess - secretNumber) <= 3) {
        console.log("Very close!");
    } else if (userGuess > secretNumber) {
        console.log("Too high");
    } else {
        console.log("Too low");
    }
}

// Display the secret number to help test the program
console.log(`Secret Number: ${secretNumber}`);
