
$(function () {
  // Choose a greeting based on the visitor's local hour.
  const hour = new Date().getHours();
  let greeting = hour < 12 ? "Good Morning!" : hour < 17 ? "Good Afternoon!" : "Good Evening!";
  $("#greeting").text(greeting + " Welcome to our website!");

  // Replace the greeting with a motivational quote.
  $("#changeGreeting").on("click", function () {
    $("#greeting").text("Believe in yourself. Every small step moves you forward!");
  });

  // Toggle the welcome paragraph without removing it from the page.
  $("#toggleWelcome").on("click", function () {
    $("#welcomeMessage").toggle();
  });

  // Support both mouse click and keyboard activation for the greeting.
  $("#greeting").on("click keypress", function (event) {
    if (event.type === "click" || event.key === "Enter") {
      alert("Thanks for visiting!");
    }
  });
});
