// Q4. Array Performance Analyzer

// Generate 8 random integer scores between 30 and 100 (inclusive)
const scores = Array.from(
    { length: 8 },
    () => Math.floor(Math.random() * 71) + 30
);

const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);
const averageScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
const passedStudents = scores.filter(score => score >= 50).length;

// Use map() to create a readable list of scores
const scoreReport = scores.map((score, index) => `Student ${index + 1}: ${score}`);

console.log(`
Array Performance Analyzer
--------------------------
${scoreReport.join("\n")}
Highest score: ${highestScore}
Lowest score: ${lowestScore}
Average score: ${averageScore.toFixed(2)}
Students passed (score ≥ 50): ${passedStudents}
`);
