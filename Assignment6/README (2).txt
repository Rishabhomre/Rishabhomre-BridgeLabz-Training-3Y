ASSIGNMENT 6 — JavaScript Asynchronous Programming

Files:
Q1  async coffee maker (Promise chaining and catch)
Q2  microtasks vs macrotasks
Q3  callback-to-Promise bug tracker
Q4  Promise.all() and Promise.race()
Q5  callback hell vs async/await
Q6  Fake Store API product fetcher (+ optional browser product cards)
Q7  Promise.allSettled() and elapsed time
Q8  order submission retry mechanism
Q9  event loop execution order
Q10 async food delivery pipeline

How to run:
1. Install Node.js 18 or newer for Q6 (global fetch is built in).
2. Open a terminal in this folder.
3. Run one file at a time, for example:
   node Q1_async_coffee_maker.js
4. Repeat with the other file names.

Notes:
- Randomly simulated failures are intentional. Run a file again if a failure occurs.
- Q6 requires an internet connection to reach https://fakestoreapi.com/products.
- The optional product-card UI in Q6 requires a browser and an HTML element:
  <div id="product-container"></div>
- Q2 and Q9 are expected to show synchronous logs first, then Promise microtasks,
  then setTimeout macrotasks.
