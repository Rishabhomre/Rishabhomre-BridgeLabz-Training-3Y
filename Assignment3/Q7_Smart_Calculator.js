"use strict";

// Q7 – Smart Calculator
const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

class InvalidOperationError extends Error {
    constructor(message) { super(message); this.name = "InvalidOperationError"; }
}
class CalculationError extends Error {
    constructor(message) { super(message); this.name = "CalculationError"; }
}

function calculate(operation, firstNumber, secondNumber) {
    switch (operation) {
        case "add":
            return firstNumber + secondNumber;
        case "subtract":
            return firstNumber - secondNumber;
        case "divide":
            if (secondNumber === 0) throw new CalculationError("Cannot divide by zero.");
            return firstNumber / secondNumber;
        case "power":
            return firstNumber ** secondNumber;
        case "root":
            if (firstNumber < 0) throw new CalculationError("Cannot calculate the real square root of a negative number.");
            return Math.sqrt(firstNumber);
        default:
            throw new InvalidOperationError(`Unsupported operation: ${operation}`);
    }
}

console.log("=== Smart Calculator Summary ===");
for (const operation of operations) {
    try {
        // For root, the first number is used; for other operations both are used.
        const result = calculate(operation, num1, num2);
        console.log(`${operation.padEnd(8)} | ${num1} and ${num2} => ${result}`);
    } catch (error) {
        console.log(`${operation.padEnd(8)} | ERROR [${error.name}]: ${error.message}`);
    }
}

// Test invalid operation handling by calling calculate("multiply", num1, num2).
