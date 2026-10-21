// Q3: Compare `this` in an arrow function and a normal method.

const user = {
    name: "Rishabh",

    // Arrow functions do not create their own `this`.
    // Here, `this` comes from the surrounding scope, not from `user`.
    showName: () => {
        console.log("Arrow function this.name:", this.name);
    }
};

user.showName(); // Usually undefined in Node.js because top-level `this` is not user.

// Fix: use a normal method, which receives `this` from the calling object.
user.showName = function () {
    console.log("Normal function this.name:", this.name);
};

user.showName(); // Rishabh

// Explanation:
// `user.showName()` sets `this` to `user` only for a normal function/method.
// An arrow function captures `this` lexically, so it does not use `user` as `this`.
