// Q6: Progressive Discount System

// Sample total purchase amount
let total = 7500;
let discountPercentage;

// Determine the discount tier
if (total >= 10000) {
    discountPercentage = 25;
} else if (total >= 5000) {
    discountPercentage = 15;
} else if (total >= 2000) {
    discountPercentage = 5;
} else {
    discountPercentage = 0;
}

// Calculate discount amount and final price
let discountAmount = Math.round(total * discountPercentage / 100);
let finalPrice = Math.round(total - discountAmount);

// Display results
console.log(`Original Total: ₹${total}`);
console.log(`Discount: ${discountPercentage}%`);
console.log(`Discount Amount: ₹${discountAmount}`);
console.log(`Final Price: ₹${finalPrice}`);
