// Q10: Citizen Eligibility Validator

// Sample input values
let age = 19;
let isCitizen = true;

// Check eligibility using nested if-else statements
// Following the assignment's distinction: age 21+ for all services,
// and citizens aged 18–20 are eligible to vote only.
if (isCitizen) {
    if (age >= 18) {
        if (age >= 21) {
            console.log("Eligible for all services.");
        } else {
            console.log("Eligible to vote only.");
        }
    } else {
        console.log("Not eligible yet.");
    }
} else {
    if (age >= 18) {
        console.log("Only age criteria met.");
    } else {
        console.log("Not eligible yet.");
    }
}
