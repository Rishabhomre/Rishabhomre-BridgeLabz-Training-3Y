// Q8 – Order Processing Flow: Async Retry Mechanism

function submitOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 50% chance of success and 50% chance of failure.
      if (Math.random() < 0.5) {
        resolve("Order submitted successfully");
      } else {
        reject(new Error("Submission failed"));
      }
    }, 500);
  });
}

async function processOrder() {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      await submitOrder();
      console.log(`Attempt ${attempt}: Success`);
      return;
    } catch (error) {
      console.log(`Attempt ${attempt}: Failed`);

      if (attempt === 3) {
        throw new Error("Order could not be processed");
      }
    }
  }
}

processOrder()
  .then(() => console.log("Order processing finished."))
  .catch((error) => console.error(error.message));
