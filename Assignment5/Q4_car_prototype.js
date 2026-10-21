// Q4: Share a method between Car objects using the prototype.

function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// One shared method is stored on Car.prototype, not copied into each object.
Car.prototype.getDetails = function () {
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
};

const carOne = new Car("Toyota", "Corolla");
const carTwo = new Car("Honda", "Civic");

carOne.getDetails();
carTwo.getDetails();

// Both objects use the same function:
console.log(
    "Shared getDetails method:",
    carOne.getDetails === carTwo.getDetails
); // true

// Expected output:
// Brand: Toyota, Model: Corolla
// Brand: Honda, Model: Civic
// Shared getDetails method: true
