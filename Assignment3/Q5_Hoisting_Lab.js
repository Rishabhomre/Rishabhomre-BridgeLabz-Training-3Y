"use strict";

// Q5 – Hoisting Lab: The Sequence Trap
// Original order (uncomment to observe the failure):
// console.log(score); // undefined: var declaration is hoisted and initialized to undefined.
// announce();         // Works: function declaration is hoisted with its function body.
// var score = 50;
// function announce() { console.log("Game started"); }
// let status = "ready";
// startGame();        // Would not be reached if execution fails earlier.
// function startGame() { console.log(status); }

// In the original sequence, console.log(score) prints undefined and announce()
// prints "Game started". Then execution reaches let status = "ready". Since startGame()
// is called after that initialization, it prints "ready". The original sequence
// actually runs successfully as written; status is initialized before startGame().

console.log("=== Corrected, clear sequence ===");
var score = 50;
let status = "ready";

function announce() {
    console.log("Game started");
}
function startGame() {
    console.log(status);
}

console.log(score);
announce();
startGame();

// Arrow-function comparison: arrow function expressions are not hoisted like
// function declarations. Call them only after the const binding is initialized.
const announceArrow = () => console.log("Game started (arrow)");
const startGameArrow = () => console.log(status);

announceArrow();
startGameArrow();

// Hoisting notes:
// - var declarations are hoisted and initialized to undefined.
// - Function declarations are available before their textual definition.
// - let/const bindings are hoisted but remain in the temporal dead zone until initialized.
// - Calling a const-bound arrow function before its declaration causes a ReferenceError.
