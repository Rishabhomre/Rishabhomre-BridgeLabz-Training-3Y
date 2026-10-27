// Q5 – Frontend Rush: Avoiding Callback Hell
// Each stage takes 1 second. First, nested callbacks demonstrate callback
// hell; then the same pipeline is implemented with async/await.

function delayLog(stage, callback) {
  setTimeout(() => {
    console.log(stage);
    callback();
  }, 1000);
}

function runWithNestedCallbacks() {
  console.log("--- Callback version ---");
  delayLog("Design complete", () => {
    delayLog("Build complete", () => {
      delayLog("Tests passed", () => {
        delayLog("Deployment complete", () => {
          delayLog("Celebrate!", () => {
            console.log("Callback pipeline finished.\n");
            runWithAsyncAwait();
          });
        });
      });
    });
  });
}

function delayStage(stage) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(stage);
      resolve();
    }, 1000);
  });
}

async function runWithAsyncAwait() {
  console.log("--- async/await version ---");
  await delayStage("Design complete");
  await delayStage("Build complete");
  await delayStage("Tests passed");
  await delayStage("Deployment complete");
  await delayStage("Celebrate!");
  console.log("Async/await pipeline finished.");
}

// Explanation:
// async/await makes asynchronous code read in a top-to-bottom style.
// await pauses this async function until the Promise settles; it does not
// block the JavaScript thread. This reduces deep nesting and improves
// readability and error handling with try/catch.
runWithNestedCallbacks();
