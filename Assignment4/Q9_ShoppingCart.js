// Q9: Shopping Cart Total (Node.js version)

class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        if (!name.trim() || price < 0 || !Number.isInteger(quantity) || quantity < 1) {
            throw new Error("Provide a name, non-negative price, and quantity of at least 1.");
        }
        this.items.push({ name, price, quantity });
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    applyCoupon(coupon) {
        const match = /^(SAVE|DISC)(\d{1,2})$/.exec(coupon);
        if (!match) {
            return { valid: false, message: "Invalid coupon. Use a code like SAVE20 or DISC10." };
        }

        const discountPercent = Number(match[2]);
        if (discountPercent < 1 || discountPercent > 100) {
            return { valid: false, message: "Coupon discount must be between 1% and 100%." };
        }

        const total = this.getTotal();
        const discount = total * discountPercent / 100;
        return {
            valid: true,
            coupon,
            discountPercent,
            subtotal: Number(total.toFixed(2)),
            discount: Number(discount.toFixed(2)),
            finalTotal: Number((total - discount).toFixed(2))
        };
    }
}

const cart = new Cart();
cart.addItem("Headphones", 1500, 1);
cart.addItem("Notebook", 100, 3);
cart.addItem("USB Cable", 250, 2);

console.log("Cart items:", cart.items);
console.log(`Subtotal: ₹${cart.getTotal().toFixed(2)}`);

const result = cart.applyCoupon("SAVE20");
if (result.valid) {
    console.log(`Coupon: ${result.coupon}`);
    console.log(`Discount: ${result.discountPercent}% (₹${result.discount.toFixed(2)})`);
    console.log(`Final total: ₹${result.finalTotal.toFixed(2)}`);
} else {
    console.log(result.message);
}
