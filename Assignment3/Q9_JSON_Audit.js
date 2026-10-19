"use strict";

// Q9 – JSON Audit
const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const errors = [];
const under18Users = [];

console.log("=== JSON Audit Report ===");

for (let index = 0; index < rawData.length; index++) {
    const lineNumber = index + 1;
    try {
        const parsed = JSON.parse(rawData[index]);

        if (typeof parsed.user !== "string" || parsed.user.trim() === "") {
            throw new Error("Missing or invalid required key: user");
        }
        if (parsed.age === undefined || parsed.age === null || parsed.age === "") {
            throw new Error("Missing required key: age");
        }

        const age = Number(parsed.age);
        if (!Number.isFinite(age) || age < 0) {
            throw new Error("Age must be a valid non-negative number.");
        }

        const cleanedRecord = { ...parsed, age };
        cleanData.push(cleanedRecord);
        if (age < 18) under18Users.push(cleanedRecord);
        console.log(`Line ${lineNumber}: valid JSON record`, cleanedRecord);
    } catch (error) {
        errors.push({ line: lineNumber, raw: rawData[index], error: error.message });
        console.log(`Line ${lineNumber}: ERROR — ${error.message}`);
        // A breakpoint here helps show that catch runs and the loop continues.
    }
}

console.log("Clean data:", cleanData);
console.log("Errors:", errors);
console.log("Users under 18:", under18Users);
console.log(`Summary: ${cleanData.length} valid, ${errors.length} invalid.`);

// Line 2 parses as JSON but fails schema validation. Line 3 fails JSON.parse.
// Line 4's string age is converted to number 22 before it is stored.
