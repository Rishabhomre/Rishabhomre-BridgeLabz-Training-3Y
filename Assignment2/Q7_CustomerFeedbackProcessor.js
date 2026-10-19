// Q7. Customer Feedback Processor

const feedback = "Great product! Fast delivery and amazing sound quality!";

// Split on whitespace and remove empty entries to count words accurately
const words = feedback.trim().split(/\s+/);
const wordCount = words.length;

const lowerCaseFeedback = feedback.toLowerCase();
const hasNegativeWords =
    lowerCaseFeedback.includes("bad") ||
    lowerCaseFeedback.includes("poor");

console.log(`Feedback: ${feedback}`);
console.log(`Word count: ${wordCount}`);
console.log(hasNegativeWords ? "Needs Improvement" : "Positive Feedback");
