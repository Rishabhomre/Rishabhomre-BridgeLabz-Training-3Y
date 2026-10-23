// Q3: Library Management System (Classes + Objects)

class Book {
    constructor(title, author, ISBN, isIssued = false) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (this.isIssued) {
            console.log(`"${this.title}" is already issued.`);
            return false;
        }
        this.isIssued = true;
        console.log(`"${this.title}" has been issued.`);
        return true;
    }

    returnBook() {
        if (!this.isIssued) {
            console.log(`"${this.title}" was not issued.`);
            return false;
        }
        this.isIssued = false;
        console.log(`"${this.title}" has been returned.`);
        return true;
    }

    getDetails() {
        return `${this.title} by ${this.author} | ISBN: ${this.ISBN} | ${this.isIssued ? "Issued" : "Available"}`;
    }
}

const books = [
    new Book("The Alchemist", "Paulo Coelho", "9780061122415"),
    new Book("Wings of Fire", "A. P. J. Abdul Kalam", "9788173711466"),
    new Book("1984", "George Orwell", "9780451524935", true),
    new Book("Atomic Habits", "James Clear", "9780735211292")
];

function displayAvailableBooks() {
    console.log("\\nAvailable books:");
    const availableBooks = books.filter(book => !book.isIssued);
    if (availableBooks.length === 0) console.log("No books are currently available.");
    availableBooks.forEach(book => console.log(book.getDetails()));
}

function issueBookByISBN(isbn) {
    const book = books.find(item => item.ISBN === isbn);
    if (!book) {
        console.log(`No book found with ISBN ${isbn}.`);
        return;
    }
    book.issueBook();
}

displayAvailableBooks();
issueBookByISBN("9780061122415");
displayAvailableBooks();
