// Q3 – Bug Tracker: Callback to Promise Migration
// Convert the callback-based function into a Promise-based getBugs().

function getBugs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Boolean flag simulates whether the mock API request fails.
      const shouldFail = Math.random() < 0.3;

      if (shouldFail) {
        reject(new Error("Bug tracker API request failed."));
      } else {
        resolve(["UI glitch", "API timeout", "Login failure"]);
      }
    }, 1000);
  });
}

getBugs()
  .then((bugs) => {
    console.log("Bugs retrieved successfully:");
    console.table(bugs.map((bug, index) => ({
      "No.": index + 1,
      Bug: bug
    })));
  })
  .catch((error) => {
    console.error("Unable to fetch bugs:", error.message);
  });
