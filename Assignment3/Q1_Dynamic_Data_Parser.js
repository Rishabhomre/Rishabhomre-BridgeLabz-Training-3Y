"use strict";

// Q1 – Dynamic Data Parser
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
const validNumericData = [];
const invalidNumericData = [];

console.log("=== Dynamic Data Parser Report ===");

for (let index = 0; index < apiData.length; index++) {
    const originalValue = apiData[index];
    const numberValue = Number(originalValue);
    const booleanValue = Boolean(originalValue);
    const stringValue = String(originalValue);
    const isValidNumber = originalValue !== null &&
        originalValue !== undefined &&
        String(originalValue).trim() !== "" &&
        Number.isFinite(numberValue);

    const report = {
        index,
        originalValue,
        numberValue: Number.isNaN(numberValue) ? "NaN" : numberValue,
        booleanValue,
        stringValue,
        validNumber: isValidNumber
    };

    if (isValidNumber) {
        validNumericData.push(numberValue);
        console.log("VALID:", report);
    } else {
        invalidNumericData.push({ ...report, reason: "Not a usable finite numeric value" });
        console.log("INVALID:", report);
    }
}

console.log("Valid numeric values:", validNumericData);
console.log("Invalid values:", invalidNumericData);
console.log("Counts:", { valid: validNumericData.length, invalid: invalidNumericData.length });

// Note: Number(null) is 0 and Number(true) is 1, but null/undefined are excluded
// from valid numeric API data intentionally. Boolean("false") is true because
// non-empty strings are truthy; Boolean(" ") is also true.
