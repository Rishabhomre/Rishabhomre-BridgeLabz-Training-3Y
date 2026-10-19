// Q10. Departmental Employee Evaluator

const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

console.log("Department Performance Report");
console.log("------------------------------");

for (const department of departments) {
    const name = department[0];
    const score = department[1];
    let evaluation;

    if (score >= 90) {
        evaluation = "Excellent";
    } else if (score >= 75) {
        evaluation = "Good";
    } else if (score >= 60) {
        evaluation = "Average";
    } else {
        evaluation = "Needs Improvement";
    }

    console.log(`${name}: ${score} - ${evaluation}`);
}
