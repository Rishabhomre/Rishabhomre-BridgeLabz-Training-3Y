"use strict";

// Q2 – Employee Bonus Calculator
const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

console.log("=== Employee Bonus Report ===");

for (const employee of employees) {
    try {
        if (!employee || typeof employee.name !== "string" ||
            employee.salary === undefined || employee.years === undefined) {
            throw new Error("Employee record is missing a required property.");
        }

        const salary = Number(employee.salary);
        const years = Number(employee.years);

        if (!Number.isFinite(salary) || !Number.isFinite(years) || salary < 0 || years < 0) {
            throw new TypeError("Salary and years must be valid non-negative numbers.");
        }

        const bonusRate = years > 3 ? 0.10 : 0.05;
        const bonus = salary * bonusRate;
        const totalCompensation = salary + bonus;

        console.log(`${employee.name}: Salary = ₹${salary.toFixed(2)}, Experience = ${years} years, Bonus Rate = ${(bonusRate * 100).toFixed(0)}%, Bonus = ₹${bonus.toFixed(2)}, Total = ₹${totalCompensation.toFixed(2)}`);
    } catch (error) {
        console.log(`Employee processing error: ${error.message}`);
    }
}

// "use strict" prevents accidental implicit globals. Variables are declared with
// const/let, so a misspelled or undeclared assignment cannot silently create a global.
