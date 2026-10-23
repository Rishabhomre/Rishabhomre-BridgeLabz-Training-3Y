// Q8: Dynamic Object Updater
const user = { name: "John", email: "john@mail.com", age: 21 };
const userForm = document.getElementById("userForm");
const userOutput = document.getElementById("userOutput");

// Fill the form with the initial object values.
Object.keys(user).forEach(key => {
    userForm.elements[key].value = user[key];
});

function displayUser() {
    userOutput.textContent = JSON.stringify(user, null, 2);
}
displayUser();

userForm.addEventListener("submit", event => {
    event.preventDefault();

    // Update the existing object from the submitted form.
    user.name = userForm.elements.name.value.trim();
    user.email = userForm.elements.email.value.trim();
    user.age = Number(userForm.elements.age.value);

    displayUser();
});
