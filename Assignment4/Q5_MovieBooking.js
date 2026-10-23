// Q5: Movie Ticket Booking (Objects + RegExp)
const bookingForm = document.getElementById("bookingForm");
const bookingRules = {
    name: /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
};

function validateBooking() {
    const name = bookingForm.elements.name.value.trim();
    const email = bookingForm.elements.email.value.trim();
    const seatsText = bookingForm.elements.seats.value.trim();
    const seats = Number(seatsText);
    const checks = {
        name: bookingRules.name.test(name),
        email: bookingRules.email.test(email),
        seats: seatsText !== "" && Number.isInteger(seats) && seats >= 1 && seats <= 10
    };

    const errors = {
        name: "Enter a name using alphabets and spaces only.",
        email: "Enter a valid email address.",
        seats: "Choose a whole number of seats from 1 to 10."
    };

    Object.entries(checks).forEach(([key, isValid]) => {
        const input = bookingForm.elements[key];
        input.classList.toggle("valid", isValid);
        input.classList.toggle("invalid", !isValid);
        document.getElementById(`${key}Error`).textContent = isValid ? "" : errors[key];
    });
    return { valid: Object.values(checks).every(Boolean), name, email, seats };
}

bookingForm.addEventListener("submit", event => {
    event.preventDefault();
    const result = validateBooking();
    const ticket = document.getElementById("ticket");

    if (!result.valid) {
        ticket.hidden = true;
        return;
    }

    const booking = { name: result.name, email: result.email, seats: result.seats };
    ticket.replaceChildren();
    const heading = document.createElement("h2");
    heading.textContent = "Booking Confirmed!";
    ticket.append(heading);

    Object.entries(booking).forEach(([key, value]) => {
        const line = document.createElement("p");
        line.textContent = `${key[0].toUpperCase() + key.slice(1)}: ${value}`;
        ticket.append(line);
    });
    ticket.hidden = false;
});
