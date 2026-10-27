// Q4 – DevOps Delay: Async Timeout Race
// Promise.all() waits for both servers. Promise.race() settles with the
// first server to finish. Each request can randomly fail.

function deployToServer(serverName, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject(new Error(`${serverName} deployment failed.`));
      } else {
        resolve(`${serverName} deployment completed`);
      }
    }, delay);
  });
}

async function runDeployments() {
  // Create separate promises for each demonstration so Promise.race()
  // does not reuse promises already settled by Promise.all().
  const allServers = Promise.all([
    deployToServer("Server A", 2000),
    deployToServer("Server B", 3000)
  ]);

  allServers
    .then(() => console.log("Deployment completed for all servers"))
    .catch((error) => console.error("Promise.all error:", error.message));

  const fastestServer = Promise.race([
    deployToServer("Server A", 2000),
    deployToServer("Server B", 3000)
  ]);

  fastestServer
    .then((result) => console.log("Fastest response:", result))
    .catch((error) => console.error("Promise.race error:", error.message));
}

runDeployments();
