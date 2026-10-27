// Q8: A custom dropdown. Capturing phase closes it when clicking outside.
const customDropdown = document.getElementById("customDropdown");
const dropdownToggle = document.getElementById("dropdownToggle");
const dropdownOptions = document.getElementById("dropdownOptions");
const dropdownSelection = document.getElementById("dropdownSelection");
const dropdownOptionButtons = document.querySelectorAll(".dropdown-option");

function setDropdownOpen(isOpen) {
  dropdownOptions.hidden = !isOpen;
  dropdownToggle.setAttribute("aria-expanded", String(isOpen));
}

dropdownToggle.addEventListener("click", () => {
  setDropdownOpen(dropdownOptions.hidden);
});

dropdownOptionButtons.forEach((optionButton) => {
  optionButton.addEventListener("click", () => {
    const selectedText = optionButton.textContent.trim();
    dropdownToggle.textContent = `${selectedText} ▾`;
    dropdownSelection.textContent = `Selected: ${selectedText}`;
    setDropdownOpen(false);
  });
});

// Capture phase (true): this listener runs before normal bubbling listeners.
document.addEventListener("click", (event) => {
  if (!customDropdown.contains(event.target)) setDropdownOpen(false);
}, true);
