// Q4. Employee Inheritance + Runtime Polymorphism

class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        return `${this.name} is doing general ${this.department} work.`;
    }
}

class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }

    // Method overriding
    work() {
        return `${this.name} is managing the ${this.department} department and a team of ${this.teamSize}.`;
    }
}

const employees = [
    new Employee("Aman", "Development"),
    new Manager("Riya", "Sales", 8),
    new Employee("Karan", "Testing"),
    new Manager("Neha", "HR", 5)
];

// Same method call, different behavior depending on the object.
employees.forEach(person => console.log(person.work()));

/*
Runtime polymorphism:
The work() method is selected according to the actual object at runtime.
Manager uses its overridden work() method, while Employee uses its own.
*/
