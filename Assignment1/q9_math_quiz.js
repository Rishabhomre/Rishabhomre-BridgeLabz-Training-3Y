// Q9: Random Math Quiz Generator

// Generate two random numbers between 1 and 20
let num1 = Math.floor(Math.random() * 20) + 1;
let num2 = Math.floor(Math.random() * 20) + 1;

// Select a random arithmetic operator
let operators = ["+", "-", "*", "/"];
let randomIndex = Math.floor(Math.random() * operators.length);
let operator = operators[randomIndex];

let answer;

// Calculate the correct answer using a switch statement
switch (operator) {
    case "+":
        answer = num1 + num2;
        break;
    case "-":
        answer = num1 - num2;
        break;
    case "*":
        answer = num1 * num2;
        break;
    case "/":
        answer = (num1 / num2).toFixed(2);
        break;
    default:
        console.log("Invalid operator");
}

// Display the question and correct answer
console.log(`Question: ${num1} ${operator} ${num2}`);
console.log(`Correct Answer: ${answer}`);
