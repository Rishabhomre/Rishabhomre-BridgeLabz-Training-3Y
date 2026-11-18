// Q3. Product Discount System (Constructor + Prototype)

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.applyDiscount = function (percent) {
    if (percent < 0 || percent > 100) {
        throw new Error("Discount must be between 0 and 100.");
    }

    return this.price - (this.price * percent / 100);
};

const products = [
    new Product("Laptop", 60000),
    new Product("Headphones", 3000),
    new Product("Keyboard", 1500)
];

const discounts = [10, 20, 5];

products.forEach((product, index) => {
    const newPrice = product.applyDiscount(discounts[index]);
    console.log(
        `${product.name}: Original price = Rs.${product.price}, ` +
        `Discount = ${discounts[index]}%, New price = Rs.${newPrice.toFixed(2)}`
    );
});

/*
Abstraction:
The caller only needs to use applyDiscount(percent). The discount formula
and validation are handled inside the method, so the caller does not need
to repeat or understand those implementation details.
*/
