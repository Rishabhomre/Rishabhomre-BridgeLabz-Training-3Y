// Q5: Inheritance using constructor functions and prototypes.

function Person(name) {
    this.name = name;
}

Person.prototype.printName = function () {
    console.log(`Name: ${this.name}`);
};

function Student(name, branch) {
    // Call Person so the Student object receives the `name` property.
    Person.call(this, name);
    this.branch = branch;
}

// Student inherits instance methods from Person.prototype.
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.printBranch = function () {
    console.log(`Branch: ${this.branch}`);
};

const student = new Student("Rishabh", "Computer Science");

student.printName();   // Inherited from Person.prototype
student.printBranch(); // Defined on Student.prototype

console.log(
    "Student prototype links to Person prototype:",
    Object.getPrototypeOf(Student.prototype) === Person.prototype
); // true

// Expected output:
// Name: Rishabh
// Branch: Computer Science
// Student prototype links to Person prototype: true
