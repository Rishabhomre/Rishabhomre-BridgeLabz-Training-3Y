// Q9. Odd–Even Number Analyzer

const numbers = [];
const results = [];

// Fill the array with numbers from 1 through 30
for (let number = 1; number <= 30; number++) {
    numbers.push(number);
}

// Classify each number according to the assignment's priority rules
for (const number of numbers) {
    let result;

    if (number % 3 === 0 && number % 5 === 0) {
        result = "FizzBuzz";
    } else if (number % 2 === 0) {
        result = "Even";
    } else {
        result = "Odd";
    }

    results.push(`${number}: ${result}`);
}

console.log("Odd–Even Number Analyzer");
console.log(results.join("\n"));
