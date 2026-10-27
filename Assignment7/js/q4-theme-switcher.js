// Q4: Apply each theme with setAttribute() and store it in data-theme.
const themeButtons = document.querySelectorAll("[data-theme-choice]");
const currentThemeText = document.getElementById("currentThemeText");
const allowedThemes = ["light", "dark", "blue"];

function applyTheme(themeName) {
  if (!allowedThemes.includes(themeName)) return;
  document.body.setAttribute("class", `theme-${themeName}`);
  document.body.setAttribute("data-theme", themeName);
  currentThemeText.textContent = `Current theme: ${themeName}`;
}

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyTheme(button.getAttribute("data-theme-choice"));
  });
});

// Restore the saved theme attribute if it exists, otherwise use light.
applyTheme(document.body.getAttribute("data-theme") || "light");
