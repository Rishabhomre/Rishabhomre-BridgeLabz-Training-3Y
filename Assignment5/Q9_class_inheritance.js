// Q9: Rewrite Person -> Student inheritance using ES6 classes.
// This behaves like the constructor/prototype version in Q5.

class Person {
    constructor(name) {
        this.name = name;
    }

    printName() {
        console.log(`Name: ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, branch) {
        // super() calls the parent constructor and initializes `name`.
        super(name);
        this.branch = branch;
    }

    printBranch() {
        console.log(`Branch: ${this.branch}`);
    }
}

const classStudent = new Student("Rishabh", "Computer Science");

classStudent.printName();   // Inherited from Person
classStudent.printBranch(); // Defined on Student

console.log(
    "Student inherits from Person:",
    classStudent instanceof Person
); // true

// Comparison with Q5:
// - Q5 uses constructor functions, Object.create(), and prototype methods explicitly.
// - This file uses class, extends, and super() syntax.
// - JavaScript classes still use prototypes behind the scenes.
// Both versions support the same inheritance behavior.

// Expected output:
// Name: Rishabh
// Branch: Computer Science
// Student inherits from Person: true
