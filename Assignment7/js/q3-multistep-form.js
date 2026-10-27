// Q3: Validate each step before moving forward, then show a summary.
const multiStepForm = document.getElementById("multiStepForm");
const formSteps = [...multiStepForm.querySelectorAll(".form-step")];
const stepBack = document.getElementById("stepBack");
const stepNext = document.getElementById("stepNext");
const multiStepSummary = document.getElementById("multiStepSummary");
let currentStepIndex = 0;

const stepFields = [
  { input: document.getElementById("stepName"), error: document.getElementById("nameStepError"), label: "Name" },
  { input: document.getElementById("stepEmail"), error: document.getElementById("emailStepError"), label: "Email" },
  { input: document.getElementById("stepPassword"), error: document.getElementById("passwordStepError"), label: "Password" }
];

function validateStep(index) {
  const field = stepFields[index];
  const value = field.input.value.trim();
  let errorMessage = "";

  if (!value) errorMessage = `${field.label} is required.`;
  else if (index === 1 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) errorMessage = "Enter a valid email address.";
  else if (index === 2 && value.length < 6) errorMessage = "Password must be at least 6 characters.";

  field.error.textContent = errorMessage;
  field.input.setAttribute("aria-invalid", String(Boolean(errorMessage)));
  return !errorMessage;
}

function displayStep(index) {
  currentStepIndex = index;
  formSteps.forEach((step, stepIndex) => step.classList.toggle("active", stepIndex === index));
  stepBack.disabled = index === 0;
  stepNext.textContent = index === formSteps.length - 1 ? "Finish" : "Next";
}

stepNext.addEventListener("click", () => {
  if (!validateStep(currentStepIndex)) {
    stepFields[currentStepIndex].input.focus();
    return;
  }

  if (currentStepIndex < formSteps.length - 1) {
    displayStep(currentStepIndex + 1);
  } else {
    multiStepSummary.hidden = false;
    multiStepSummary.innerHTML = `
      <strong>All steps completed!</strong><br>
      Name: ${escapeHtml(stepFields[0].input.value.trim())}<br>
      Email: ${escapeHtml(stepFields[1].input.value.trim())}<br>
      Password: ${"•".repeat(stepFields[2].input.value.length)}
    `;
    stepNext.disabled = true;
    stepBack.disabled = true;
  }
});

stepBack.addEventListener("click", () => {
  if (currentStepIndex > 0) displayStep(currentStepIndex - 1);
});

stepFields.forEach((field, index) => {
  field.input.addEventListener("input", () => {
    if (field.error.textContent) validateStep(index);
  });
});

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}
