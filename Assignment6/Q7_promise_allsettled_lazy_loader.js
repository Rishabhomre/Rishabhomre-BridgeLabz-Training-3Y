// Q7 – The Lazy Loader: Promise Combinator Practice
// Promise.allSettled() waits until every Promise has fulfilled or rejected.

function loadProfile() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.3) {
        reject(new Error("Profile failed to load"));
      } else {
        resolve("Profile Loaded");
      }
    }, 2000);
  });
}

function loadPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.3) {
        reject(new Error("Posts failed to load"));
      } else {
        resolve("Posts Loaded");
      }
    }, 1500);
  });
}

function loadMessages() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.3) {
        reject(new Error("Messages failed to load"));
      } else {
        resolve("Messages Loaded");
      }
    }, 1000);
  });
}

async function loadDashboard() {
  const startTime = Date.now();

  const results = await Promise.allSettled([
    loadProfile(),
    loadPosts(),
    loadMessages()
  ]);

  const moduleNames = ["Profile", "Posts", "Messages"];

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`${moduleNames[index]}: SUCCESS — ${result.value}`);
    } else {
      console.error(`${moduleNames[index]}: FAILED — ${result.reason.message}`);
    }
  });

  const totalTime = Date.now() - startTime;
  console.log(`Total time taken: ${totalTime} ms`);
}

loadDashboard();
