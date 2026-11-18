// Q8. Movie Ticket Booking (Inheritance + Prototype Chain)

class MovieTicket {
    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }
}

// Add method to MovieTicket's prototype.
MovieTicket.prototype.printTicket = function () {
    console.log(
        `Movie: ${this.movieName} | Seat: ${this.seatNo} | Ticket price: Rs.${this.price}`
    );
};

class OnlineTicket extends MovieTicket {
    constructor(movieName, seatNo, price, convenienceFee) {
        super(movieName, seatNo, price);
        this.convenienceFee = convenienceFee;
    }

    getTotalAmount() {
        return this.price + this.convenienceFee;
    }
}

const ticket1 = new OnlineTicket("Dangal", "A10", 200, 25);
const ticket2 = new OnlineTicket("3 Idiots", "B12", 250, 30);

ticket1.printTicket(); // Inherited prototype method
console.log("Total amount: Rs." + ticket1.getTotalAmount());

ticket2.printTicket();
console.log("Total amount: Rs." + ticket2.getTotalAmount());

console.log(
    "Prototype chain works:",
    MovieTicket.prototype.isPrototypeOf(ticket1)
);
