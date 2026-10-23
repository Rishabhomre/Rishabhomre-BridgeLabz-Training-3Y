// Q6: Employee Management System (Classes + Object Methods)

class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary; // Monthly salary
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        if (percent < 0) throw new Error("Bonus percent cannot be negative.");
        this.salary = Number((this.salary * (1 + percent / 100)).toFixed(2));
    }

    getDetails() {
        return `${this.name} (${this.department}) — Annual salary: ₹${this.getAnnualSalary().toFixed(2)}`;
    }
}

const employees = [
    new Employee(1, "Aarav", "Engineering", 50000),
    new Employee(2, "Diya", "HR", 35000),
    new Employee(3, "Kabir", "Sales", 42000),
    new Employee(4, "Meera", "Finance", 46000),
    new Employee(5, "Ishaan", "Support", 30000)
];

// Apply a 10% bonus to the first employee as an example.
employees[0].applyBonus(10);

console.log("Employee annual salaries:");
employees.forEach(employee => console.log(employee.getDetails()));

const totalAnnualPayout = employees.reduce(
    (total, employee) => total + employee.getAnnualSalary(),
    0
);

console.log(`\\nTotal annual payout: ₹${totalAnnualPayout.toFixed(2)}`);
