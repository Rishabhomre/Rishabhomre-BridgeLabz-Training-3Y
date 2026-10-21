// Q8: Add a custom myMap() method to Array.prototype.
// This implementation mirrors the core behavior of Array.prototype.map().

Array.prototype.myMap = function (callback, thisArg) {
    if (typeof callback !== "function") {
        throw new TypeError("myMap callback must be a function");
    }

    const result = [];

    for (let index = 0; index < this.length; index++) {
        // Built-in map skips array holes; preserve that behavior.
        if (Object.prototype.hasOwnProperty.call(this, index)) {
            result[index] = callback.call(thisArg, this[index], index, this);
        }
    }

    return result;
};

console.log([1, 2, 3].myMap(number => number * 2)); // [2, 4, 6]
console.log([1, 2, 3, 4].myMap((number, index) => number + index));
// [1, 3, 5, 7]

// Note: In production code, avoid changing built-in prototypes unless required.
