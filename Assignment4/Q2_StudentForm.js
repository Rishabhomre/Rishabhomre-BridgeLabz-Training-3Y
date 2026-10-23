// Q2: Student Form Validator (Forms + RegExp)
const studentForm = document.getElementById("studentForm");

const studentRules = {
    name: /^[A-Za-z]+$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^\d{10}$/,
    // At least one uppercase letter, one number, and one special character.
    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
};

const studentErrorMessages = {
    name: "Name must contain alphabets only.",
    email: "Enter a valid email, e.g. example@domain.com.",
    phone: "Phone number must contain exactly 10 digits.",
    password: "Password needs an uppercase letter, a number, and a special character."
};

function validateStudentField(fieldName) {
    const input = studentForm.elements[fieldName];
    const error = document.getElementById(`${fieldName}Error`);
    const isValid = studentRules[fieldName].test(input.value.trim());

    input.classList.toggle("valid", isValid);
    input.classList.toggle("invalid", !isValid);
    error.textContent = isValid ? "" : studentErrorMessages[fieldName];
    return isValid;
}

Object.keys(studentRules).forEach(fieldName => {
    studentForm.elements[fieldName].addEventListener("input", () => validateStudentField(fieldName));
});

studentForm.addEventListener("submit", event => {
    event.preventDefault();
    const isFormValid = Object.keys(studentRules).map(validateStudentField).every(Boolean);
    const message = document.getElementById("formMessage");

    if (isFormValid) {
        message.textContent = "Registration successful!";
        message.className = "success";
    } else {
        message.textContent = "Please correct the highlighted fields.";
        message.className = "";
    }
});
