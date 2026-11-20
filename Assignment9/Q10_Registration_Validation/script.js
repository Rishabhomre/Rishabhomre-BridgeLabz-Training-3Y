
$(function () {
  const registeredEmails = ["demo@example.com", "student@example.com"];

  $("#registrationForm").on("submit", function (event) {
    event.preventDefault();
    let valid = true;
    const $name = $("#name"), $email = $("#email"), $password = $("#password");
    const emailValue = $email.val().trim().toLowerCase();

    // Clear old error styling before validating the current values.
    const $fields = $name.add($email).add($password);
    $fields.css("border", "1px solid #bbb");

    function markInvalid($field) {
      $field.css("border", "2px solid red");
      valid = false;
    }

    if (!$name.val().trim()) markInvalid($name);

    // Check a basic email pattern and reject addresses in the demo registered list.
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailValue) || registeredEmails.includes(emailValue)) markInvalid($email);

    if ($password.val().length < 8) markInvalid($password);

    if (valid) {
      $("#formMessage").css("color", "green").text("Registration successful! Welcome, " + $name.val().trim() + ".");
      registeredEmails.push(emailValue); // Add it so a second registration is treated as a duplicate.
      this.reset();
    } else {
      $("#formMessage").css("color", "red").text("Please correct the fields highlighted in red. Email must be unique.");
    }
  });

  // Remove red borders as the user edits an invalid field.
  $("#registrationForm input").on("input", function () {
    $(this).css("border", "1px solid #bbb");
  });

  $("#registrationForm").on("reset", function () {
    setTimeout(function () {
      $("#registrationForm input").css("border", "1px solid #bbb");
      $("#formMessage").text("");
    }, 0);
  });
});
