"use strict";

// Q6 – Pyramid Pattern Generator
// Default limit is 5. To customize, set patternLimit to a positive integer.
const patternLimit = 5;

console.log("=== Pyramid Pattern ===");
for (let row = 1; row <= patternLimit; row++) {
    let line = "";
    for (let column = 1; column <= row; column++) {
        line += "* ";
    }
    console.log(line.trimEnd());
}

// var comparison:
// var is function-scoped rather than block-scoped. Reusing `row`/`column` with var
// leaves their final values available outside the loops (at top-level in Node,
// they are module-scoped). The pattern still prints the same when initialized
// and incremented correctly, but var can cause accidental reuse/collisions.
// Uncomment to compare:
// for (var rowVar = 1; rowVar <= patternLimit; rowVar++) {
//     var lineVar = "";
//     for (var columnVar = 1; columnVar <= rowVar; columnVar++) lineVar += "* ";
//     console.log(lineVar.trimEnd());
// }

// Debug step-by-step: break at the outer loop; watch row, column, and line.
// Strict mode catches assignments to undeclared names, e.g. `counter = 1`.
// For user input in Node.js, use readline; this standalone version uses default = 5.
