"use strict";

// Q4 – Debugging Mystery
function showMessage() {
    // greeting = "Welcome"; // ReferenceError in strict mode: undeclared assignment.
    const greeting = "Welcome"; // Correct: explicitly declared in function scope.
    console.log(greeting);
}

showMessage();

// Debugging exercise in VS Code:
// 1. Add a breakpoint on the const greeting line.
// 2. Add "greeting" to WATCH.
// 3. Step over the declaration and inspect greeting in VARIABLES/WATCH.
// 4. Check CALL STACK: showMessage is active while its body executes.
// The declaration makes greeting local to showMessage instead of an accidental global.
