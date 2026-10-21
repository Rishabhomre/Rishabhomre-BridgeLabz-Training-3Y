// Q1: Demonstrate callback flow.
// A callback is a function passed to another function and executed later.

function showEndMessage() {
    console.log("Welcome to the course!");
}

function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    console.log("Calling the callback now...");
    callback();
}

// Demonstration
greetUser("Rishabh", showEndMessage);

// Expected output:
// Hello Rishabh
// Calling the callback now...
// Welcome to the course!
