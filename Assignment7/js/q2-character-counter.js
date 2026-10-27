// Q2: Count remaining characters and block input once 100 characters are reached.
const messageInput = document.getElementById("messageInput");
const characterCounter = document.getElementById("characterCounter");
const resetMessage = document.getElementById("resetMessage");
const maximumCharacters = 100;

function updateCharacterCounter() {
  const remainingCharacters = maximumCharacters - messageInput.value.length;
  characterCounter.textContent = `${remainingCharacters} characters remaining`;
  characterCounter.classList.toggle("warning", remainingCharacters <= 20 && remainingCharacters > 0);
  characterCounter.classList.toggle("danger", remainingCharacters === 0);
}

messageInput.addEventListener("input", updateCharacterCounter);
messageInput.addEventListener("keydown", (event) => {
  const isControlKey = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Tab", "Home", "End"].includes(event.key);
  const isShortcut = (event.ctrlKey || event.metaKey) && ["a", "c", "v", "x"].includes(event.key.toLowerCase());
  if (messageInput.value.length >= maximumCharacters && !isControlKey && !isShortcut && event.key.length === 1) {
    event.preventDefault();
  }
});
messageInput.addEventListener("paste", (event) => {
  const pastedText = (event.clipboardData || window.clipboardData).getData("text");
  const availableSpace = maximumCharacters - messageInput.value.length;
  if (pastedText.length > availableSpace) {
    event.preventDefault();
    messageInput.setRangeText(pastedText.slice(0, Math.max(0, availableSpace)), messageInput.selectionStart, messageInput.selectionEnd, "end");
    updateCharacterCounter();
  }
});
resetMessage.addEventListener("click", () => {
  messageInput.value = "";
  updateCharacterCounter();
  messageInput.focus();
});
updateCharacterCounter();
