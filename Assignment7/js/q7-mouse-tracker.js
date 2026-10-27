// Q7: Show client coordinates and add red dots on double-click.
const mouseTrackingBox = document.getElementById("mouseTrackingBox");
const mouseCoordinates = document.getElementById("mouseCoordinates");

mouseTrackingBox.addEventListener("mousemove", (event) => {
  mouseCoordinates.textContent = `clientX: ${event.clientX}, clientY: ${event.clientY}`;
});

mouseTrackingBox.addEventListener("dblclick", (event) => {
  const boxRectangle = mouseTrackingBox.getBoundingClientRect();
  const redDot = document.createElement("span");
  redDot.className = "mouse-dot";
  redDot.setAttribute("aria-label", "Double-click marker");
  redDot.style.left = `${event.clientX - boxRectangle.left}px`;
  redDot.style.top = `${event.clientY - boxRectangle.top}px`;
  mouseTrackingBox.appendChild(redDot);
});
