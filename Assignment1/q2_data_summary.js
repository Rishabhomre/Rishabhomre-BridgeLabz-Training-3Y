// Q2: Multi-Type Data Summary

// Declare variables of different data types
let userName = "Rishabh";
let age = 21;
let isStudent = true;
let subjects = ["JavaScript", "HTML", "CSS"];
let user = { name: "Rishabh", age: 21 };
let address = null;
let email;

// Create a formatted report using typeof and Array.isArray()
let report = [
    { Label: "User Name", Value: userName, Type: typeof userName },
    { Label: "Age", Value: age, Type: typeof age },
    { Label: "Is Student", Value: isStudent, Type: typeof isStudent },
    {
        Label: "Subjects",
        Value: subjects.join(", "),
        Type: Array.isArray(subjects) ? "array" : typeof subjects
    },
    { Label: "User Object", Value: JSON.stringify(user), Type: typeof user },
    { Label: "Address", Value: address, Type: address === null ? "null" : typeof address },
    { Label: "Email", Value: email, Type: typeof email }
];

// Display the report in one table
console.table(report);
