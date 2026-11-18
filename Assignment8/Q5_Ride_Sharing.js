// Q5. Ride-Sharing Application

class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle, vehicleNumber) {
        super(name, rating);
        this.vehicle = vehicle;
        this.vehicleNumber = vehicleNumber;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (this.distance === undefined || this.distance === null ||
            this.distance === "" || !Number.isFinite(Number(this.distance)) ||
            Number(this.distance) < 0) {
            throw new Error("Trip distance must be a valid non-negative number.");
        }

        const ratePerKm = 12;
        const baseFare = 30;
        return baseFare + Number(this.distance) * ratePerKm;
    }
}

const rider = new User("Aman", 4.8);
const driver = new Driver("Rohit", 4.9, "Car", "UP85AB1234");

console.log(`Rider: ${rider.name}, Rating: ${rider.rating}`);
console.log(`Driver: ${driver.name}, Vehicle: ${driver.vehicle}, Number: ${driver.vehicleNumber}`);

try {
    const trip = new Trip("Mathura", "Agra", 60);
    console.log(`Fare: Rs.${trip.calculateFare()}`);
} catch (error) {
    console.log("Trip error:", error.message);
}

try {
    const invalidTrip = new Trip("Mathura", "Agra", -10);
    console.log(`Fare: Rs.${invalidTrip.calculateFare()}`);
} catch (error) {
    console.log("Trip error:", error.message);
}
