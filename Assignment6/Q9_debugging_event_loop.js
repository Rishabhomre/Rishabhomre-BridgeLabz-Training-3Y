// Q9 – Debugging the Event Loop
// Predicted output order:
// 1. Script start
// 2. Script end
// 3. Promise callback
// 4. Timeout callback

console.log("Script start");

setTimeout(() => console.log("Timeout callback"), 0);

Promise.resolve().then(() => console.log("Promise callback"));

console.log("Script end");

// Explanation:
// Synchronous logs run first, so "Script start" and "Script end" appear first.
// Promise.then() queues a microtask. setTimeout(..., 0) queues a macrotask.
// Once the current script finishes, JavaScript runs pending microtasks before
// the next macrotask, so the Promise callback appears before the timeout.
