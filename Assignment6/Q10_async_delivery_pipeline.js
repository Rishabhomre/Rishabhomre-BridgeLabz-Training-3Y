// Q10 – The Final Delivery: Async Pipeline Debugger
// Each step returns a Promise that succeeds or fails after a random 1–2 seconds.
// async/await makes the pipeline execute sequentially in a readable way.

function runDeliveryStep(stepName, successMessage) {
  return new Promise((resolve, reject) => {
    const delay = 1000 + Math.floor(Math.random() * 1000);

    setTimeout(() => {
      // Simulate a 15% chance of failure at each step.
      if (Math.random() < 0.15) {
        reject(new Error(`${stepName} failed`));
      } else {
        console.log(successMessage);
        resolve();
      }
    }, delay);
  });
}

async function runPipeline() {
  console.log("Start Pipeline");

  try {
    await runDeliveryStep("takeOrder", "Step 1: Order taken");
    await runDeliveryStep("prepare", "Step 2: Food prepared");
    await runDeliveryStep("pack", "Step 3: Package ready");
    await runDeliveryStep("dispatch", "Step 4: Out for delivery");
    await runDeliveryStep("deliver", "Delivery completed!");

  } catch (error) {
    // If any awaited step rejects, control jumps to this catch block.
    // Later steps are skipped, and the pipeline reports a failure.
    console.error("Pipeline failed!", error.message);
  }
}

runPipeline();

// Async/event-loop notes:
// - Calling an async function returns a Promise.
// - await pauses this async function until the current step's Promise settles;
//   it does not block the entire JavaScript event loop.
// - setTimeout schedules a callback for a later task after the delay.
// - Promise continuations resume asynchronously after the Promise settles.
// - The steps are sequential because each await must finish before the next
//   step starts. A rejected Promise transfers control to catch.
