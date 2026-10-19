// Q4: Academic Performance Evaluator

// Marks obtained in five subjects (each subject is out of 100)
let marks = [90, 85, 88, 80, 92];

// Calculate total marks
let total = 0;
for (let mark of marks) {
    total += mark;
}

// Calculate average and overall percentage
let average = total / marks.length;
let percentage = (total / (marks.length * 100)) * 100;

// Check whether any subject has marks below 35
let failed = marks.some(mark => mark < 35);

// Display results
console.log(`Average Marks: ${average.toFixed(2)}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);

// A student is detained if any subject mark is below 35 or percentage is below 50
if (failed || percentage < 50) {
    console.log("Detained");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else if (percentage >= 50 && percentage < 85) {
    console.log("Promoted");
}
