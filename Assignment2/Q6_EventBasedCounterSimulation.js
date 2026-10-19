// Q6. Event-Based Counter Simulation

let count = 0;

function showCountWithNestedFunction() {
    // Nested function can access the outer function's local variables.
    function logMessage() {
        console.log(`Current count (from nested function): ${count}`);
    }

    logMessage();
}

function increment() {
    count++;
    console.log(`Increment clicked. Count: ${count}`);
    showCountWithNestedFunction();
}

function decrement() {
    count--;
    console.log(`Decrement clicked. Count: ${count}`);
    showCountWithNestedFunction();
}

// Simulate click events manually
increment();
increment();
decrement();
increment();
decrement();
