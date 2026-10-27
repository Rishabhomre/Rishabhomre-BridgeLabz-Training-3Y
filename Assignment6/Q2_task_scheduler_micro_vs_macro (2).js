// Q2 – Task Scheduler: Micro vs Macro Challenge

console.log("Start");

setTimeout(() => {
  console.log("setTimeout callback (macrotask)");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise callback (microtask)");
});

console.log("Synchronous log");
console.log("End");

// Explanation:
// 1. Synchronous statements run first, in source-code order.
// 2. Promise .then() callbacks are microtasks.
// 3. setTimeout callbacks are macrotasks (tasks).
// 4. After the current synchronous script finishes, JavaScript drains the
//    microtask queue before moving on to the next macrotask.
