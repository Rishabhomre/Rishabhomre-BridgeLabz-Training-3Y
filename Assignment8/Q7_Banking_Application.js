// Q7. Banking Application (Private Fields + Error Handling)

class BankAccount {
    #balance;

    constructor(initialBalance = 0) {
        if (!Number.isFinite(initialBalance) || initialBalance < 0) {
            throw new Error("Initial balance must be a non-negative number.");
        }
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (!Number.isFinite(amount) || amount <= 0) {
            throw new Error("Deposit amount must be greater than zero.");
        }

        this.#balance += amount;
        return this.#balance;
    }

    withdraw(amount) {
        if (!Number.isFinite(amount) || amount <= 0) {
            throw new Error("Withdrawal amount must be greater than zero.");
        }

        if (amount > this.#balance) {
            throw new Error("Insufficient balance. Withdrawal cannot be completed.");
        }

        this.#balance -= amount;
        return this.#balance;
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount(1000);

try {
    console.log("After deposit:", account.deposit(500));
} catch (error) {
    console.log("Deposit error:", error.message);
}

try {
    console.log("After withdrawal:", account.withdraw(300));
} catch (error) {
    console.log("Withdrawal error:", error.message);
}

try {
    account.withdraw(2000); // Invalid: balance is insufficient.
} catch (error) {
    console.log("Withdrawal error:", error.message);
}

console.log("Final balance:", account.getBalance());

// account.#balance = 50000; // SyntaxError: private field cannot be accessed outside the class.
