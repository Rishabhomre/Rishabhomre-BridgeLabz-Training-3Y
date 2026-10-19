// Q8: Employee Salary Projection

// Declare current salary and annual increment rate
let currentSalary = 30000;
let incrementRate = 10;

// Store yearly salary details for the table
let salaryReport = [];

// Calculate salary for each of the next five years
for (let year = 1; year <= 5; year++) {
    currentSalary += currentSalary * incrementRate / 100;

    // Round salary to two decimal places
    currentSalary = Math.round(currentSalary * 100) / 100;

    salaryReport.push({
        Year: year,
        Salary: currentSalary.toFixed(2)
    });
}

// Display the salary projection
console.table(salaryReport);
