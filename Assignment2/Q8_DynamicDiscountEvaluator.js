// Q8. Dynamic Discount Evaluator

const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

// Calculate the original cart value with reduce()
const originalTotal = cart.reduce((total, product) => total + product.price, 0);

let discountedSubtotal = 0;

console.log("Item-wise discount report:");
for (const product of cart) {
    let discountRate = 0;

    if (product.category === "electronics") {
        discountRate = 0.10;
    } else if (product.category === "fashion") {
        discountRate = 0.05;
    }

    const itemDiscount = product.price * discountRate;
    const finalItemPrice = product.price - itemDiscount;
    discountedSubtotal += finalItemPrice;

    console.log(
        `${product.item}: ₹${product.price} - ${discountRate * 100}% = ₹${finalItemPrice.toFixed(2)}`
    );
}

// Apply an extra 5% discount if the original cart value is over ₹50,000
const extraDiscountRate = originalTotal > 50000 ? 0.05 : 0;
const extraDiscount = discountedSubtotal * extraDiscountRate;
const finalTotal = discountedSubtotal - extraDiscount;

console.log(`Original cart value: ₹${originalTotal.toFixed(2)}`);
console.log(`Subtotal after item discounts: ₹${discountedSubtotal.toFixed(2)}`);
console.log(`Extra cart discount: ${extraDiscountRate * 100}% (₹${extraDiscount.toFixed(2)})`);
console.log(`Final total: ₹${finalTotal.toFixed(2)}`);
