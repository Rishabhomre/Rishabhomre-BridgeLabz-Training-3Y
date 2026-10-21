// Q2: Use a callback to apply an operation to every number in an array.

function applyOperation(numbers, operation) {
    // Array.map() calls operation for each element and returns a new array.
    return numbers.map(operation);
}

const numbers = [1, 2, 3, 4];

const doubledNumbers = applyOperation(numbers, function (number) {
    return number * 2;
});

const squaredNumbers = applyOperation(numbers, function (number) {
    return number * number;
});

console.log("Original numbers:", numbers);
console.log("Doubled numbers:", doubledNumbers);
console.log("Squared numbers:", squaredNumbers);

// Expected output:
// Original numbers: [ 1, 2, 3, 4 ]
// Doubled numbers: [ 2, 4, 6, 8 ]
// Squared numbers: [ 1, 4, 9, 16 ]
