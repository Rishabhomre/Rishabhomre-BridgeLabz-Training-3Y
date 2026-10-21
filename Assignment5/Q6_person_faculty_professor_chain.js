// Q6: Build the prototype chain Person -> Faculty -> Professor.

function Person(name) {
    this.name = name;
}

Person.prototype.introduce = function () {
    console.log(`Person: ${this.name}`);
};

function Faculty(name, department) {
    Person.call(this, name);
    this.department = department;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showDepartment = function () {
    console.log(`Department: ${this.department}`);
};

function Professor(name, department, subject) {
    Faculty.call(this, name, department);
    this.subject = subject;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.showSubject = function () {
    console.log(`Subject: ${this.subject}`);
};

const professor = new Professor("Dr. Sharma", "Computer Science", "JavaScript");

// Own method, Faculty method, and Person method are all accessible.
professor.showSubject();
professor.showDepartment();
professor.introduce();

console.log(
    "Professor -> Faculty:",
    Object.getPrototypeOf(Professor.prototype) === Faculty.prototype
); // true

console.log(
    "Faculty -> Person:",
    Object.getPrototypeOf(Faculty.prototype) === Person.prototype
); // true

// Expected output:
// Subject: JavaScript
// Department: Computer Science
// Person: Dr. Sharma
// Professor -> Faculty: true
// Faculty -> Person: true
