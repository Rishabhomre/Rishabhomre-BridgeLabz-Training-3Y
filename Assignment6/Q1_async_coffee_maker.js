// Q1 – The Startup Morning: Async Coffee Maker
// Each step returns a Promise and takes a random 1–2 seconds.
// A random failure is simulated so that .catch() can be demonstrated.

function randomDelay() {
  return 1000 + Math.floor(Math.random() * 1000);
}

function runCoffeeStep(stepName, successMessage) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // About 20% chance that this step fails.
      if (Math.random() < 0.2) {
        reject(new Error(`${stepName} failed. Please try again.`));
      } else {
        console.log(successMessage);
        resolve();
      }
    }, randomDelay());
  });
}

runCoffeeStep("Boiling water", "Step 1: Water boiled.")
  .then(() => runCoffeeStep("Brewing coffee", "Step 2: Coffee brewed."))
  .then(() => runCoffeeStep("Pouring coffee", "Step 3: Coffee poured into a cup."))
  .then(() => console.log("Coffee ready for the team!"))
  .catch((error) => console.error("Coffee process error:", error.message));
