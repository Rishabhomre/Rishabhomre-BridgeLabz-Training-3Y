// Q9: Shopping Cart Total (Browser version)
class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        this.items.push({ name, price, quantity });
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    applyCoupon(coupon) {
        const match = /^(SAVE|DISC)(\d{1,2})$/.exec(coupon.trim().toUpperCase());
        if (!match) return { valid: false, message: "Invalid code. Use SAVE20 or DISC10 format." };

        const percent = Number(match[2]);
        if (percent < 1 || percent > 100) {
            return { valid: false, message: "Discount must be from 1% to 100%." };
        }

        const subtotal = this.getTotal();
        const discount = subtotal * percent / 100;
        return {
            valid: true,
            percent,
            subtotal,
            discount,
            finalTotal: subtotal - discount
        };
    }
}

const cart = new Cart();
cart.addItem("Headphones", 1500, 1);
cart.addItem("Notebook", 100, 3);
cart.addItem("USB Cable", 250, 2);

const cartItems = document.getElementById("cartItems");
cart.items.forEach(item => {
    const row = document.createElement("div");
    row.className = "cart-item";
    const name = document.createElement("span");
    name.textContent = `${item.name} × ${item.quantity}`;
    const price = document.createElement("strong");
    price.textContent = `₹${(item.price * item.quantity).toFixed(2)}`;
    row.append(name, price);
    cartItems.append(row);
});
document.getElementById("subtotal").textContent = `Subtotal: ₹${cart.getTotal().toFixed(2)}`;

document.getElementById("couponForm").addEventListener("submit", event => {
    event.preventDefault();
    const result = cart.applyCoupon(document.getElementById("coupon").value);
    const message = document.getElementById("couponMessage");
    const summary = document.getElementById("cartSummary");
    summary.replaceChildren();

    if (!result.valid) {
        message.textContent = result.message;
        message.className = "error";
        return;
    }

    message.textContent = `Coupon applied: ${result.percent}% off.`;
    message.className = "success";

    [
        `Subtotal: ₹${result.subtotal.toFixed(2)}`,
        `Discount: -₹${result.discount.toFixed(2)}`,
        `Final total: ₹${result.finalTotal.toFixed(2)}`
    ].forEach(text => {
        const line = document.createElement("p");
        line.textContent = text;
        summary.append(line);
    });
});
