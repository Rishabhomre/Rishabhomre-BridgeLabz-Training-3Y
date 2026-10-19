"use strict";

// Q3 – Transaction Validator
const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const validTransactions = [];
const invalidTransactions = [];

class NegativeAmountError extends Error {
    constructor(message) { super(message); this.name = "NegativeAmountError"; }
}
class MissingFieldError extends Error {
    constructor(message) { super(message); this.name = "MissingFieldError"; }
}
class NullTransactionError extends Error {
    constructor(message) { super(message); this.name = "NullTransactionError"; }
}

console.log("=== Transaction Validation Report ===");

for (let index = 0; index < transactions.length; index++) {
    const transaction = transactions[index];
    try {
        // Set a breakpoint here to inspect index, transaction, and both arrays.
        if (transaction === null || transaction === undefined) {
            throw new NullTransactionError("Transaction entry is null or undefined.");
        }
        if (transaction.id === undefined || transaction.amount === undefined) {
            throw new MissingFieldError("Transaction is missing id or amount.");
        }
        if (typeof transaction.amount !== "number" || !Number.isFinite(transaction.amount)) {
            throw new TypeError("Amount must be a finite number.");
        }
        if (transaction.amount < 0) {
            throw new NegativeAmountError("Transaction amount cannot be negative.");
        }

        validTransactions.push(transaction);
        console.log(`Transaction ${transaction.id} is valid.`);
    } catch (error) {
        invalidTransactions.push({
            index,
            transaction,
            errorType: error.name,
            message: error.message
        });
        console.log(`Transaction at index ${index} failed [${error.name}]: ${error.message}`);
    }
}

console.log("Valid transactions:", validTransactions);
console.log("Invalid transactions:", invalidTransactions);
console.log(`Summary: ${validTransactions.length} successful, ${invalidTransactions.length} failed.`);

// Debug: place a breakpoint inside the loop and step over each validation check.
// The call stack shows the current script's top-level execution and loop location.
