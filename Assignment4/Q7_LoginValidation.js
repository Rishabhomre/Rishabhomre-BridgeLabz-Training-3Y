// Q7: Login Form Validation using RegExp
const loginForm = document.getElementById("loginForm");
const usernameRule = /^.{5,}$/;
const passwordRules = [
    { regex: /.{8,}/, message: "Password must be at least 8 characters long." },
    { regex: /[0-9]/, message: "Password must include at least one number." },
    { regex: /[A-Z]/, message: "Password must include at least one uppercase letter." },
    { regex: /[a-z]/, message: "Password must include at least one lowercase letter." },
    { regex: /[^A-Za-z0-9]/, message: "Password must include at least one special character." }
];

loginForm.addEventListener("submit", event => {
    event.preventDefault();
    const username = loginForm.elements.username.value;
    const password = loginForm.elements.password.value;
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");
    const message = document.getElementById("loginMessage");

    const isUsernameValid = usernameRule.test(username);
    usernameError.textContent = isUsernameValid ? "" : "Username must contain at least 5 characters.";
    loginForm.elements.username.classList.toggle("valid", isUsernameValid);
    loginForm.elements.username.classList.toggle("invalid", !isUsernameValid);

    const passwordErrors = passwordRules
        .filter(rule => !rule.regex.test(password))
        .map(rule => rule.message);
    passwordError.textContent = passwordErrors.join(" ");
    const isPasswordValid = passwordErrors.length === 0;
    loginForm.elements.password.classList.toggle("valid", isPasswordValid);
    loginForm.elements.password.classList.toggle("invalid", !isPasswordValid);

    if (isUsernameValid && isPasswordValid) {
        message.textContent = "Validation successful! (This demo does not authenticate against a server.)";
        message.className = "success";
    } else {
        message.textContent = "Please fix the errors above.";
        message.className = "failure";
    }
});
