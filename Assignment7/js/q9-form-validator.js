// Q9: Block submission when invalid and clear each field's error as it is corrected.
const validationForm = document.getElementById("validationForm");
const fullName = document.getElementById("fullName");
const formEmail = document.getElementById("formEmail");
const formPassword = document.getElementById("formPassword");
const fullNameError = document.getElementById("fullNameError");
const formEmailError = document.getElementById("formEmailError");
const formPasswordError = document.getElementById("formPasswordError");
const formSuccessMessage = document.getElementById("formSuccessMessage");

function validateName() {
  const error = fullName.value.trim() ? "" : "Name is required.";
  fullNameError.textContent = error;
  fullName.setAttribute("aria-invalid", String(Boolean(error)));
  return !error;
}

function validateEmail() {
  const emailValue = formEmail.value.trim();
  let error = "";
  if (!emailValue) error = "Email is required.";
  else if (!emailValue.includes("@")) error = "Email must contain @.";
  formEmailError.textContent = error;
  formEmail.setAttribute("aria-invalid", String(Boolean(error)));
  return !error;
}

function validatePassword() {
  const error = formPassword.value.length >= 6 ? "" : "Password must be at least 6 characters.";
  formPasswordError.textContent = error;
  formPassword.setAttribute("aria-invalid", String(Boolean(error)));
  return !error;
}

fullName.addEventListener("input", () => {
  if (fullNameError.textContent) validateName();
  formSuccessMessage.hidden = true;
});
formEmail.addEventListener("input", () => {
  if (formEmailError.textContent) validateEmail();
  formSuccessMessage.hidden = true;
});
formPassword.addEventListener("input", () => {
  if (formPasswordError.textContent) validatePassword();
  formSuccessMessage.hidden = true;
});

validationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();

  if (isNameValid && isEmailValid && isPasswordValid) {
    formSuccessMessage.hidden = false;
    validationForm.reset();
    [fullName, formEmail, formPassword].forEach((field) => field.setAttribute("aria-invalid", "false"));
  } else {
    formSuccessMessage.hidden = true;
    if (!isNameValid) fullName.focus();
    else if (!isEmailValid) formEmail.focus();
    else formPassword.focus();
  }
});
