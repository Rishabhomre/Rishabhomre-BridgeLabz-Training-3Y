// Q7: Return a function that remembers the multiplier (closure).

function makeMultiplier(multiplier) {
    // The returned function retains access to `multiplier` after
    // makeMultiplier() has finished executing. This is a closure.
    return function (number) {
        return number * multiplier;
    };
}

const triple = makeMultiplier(3);
const double = makeMultiplier(2);

console.log(triple(5)); // 15
console.log(double(5)); // 10

// Closure explanation:
// `triple` remembers multiplier = 3, and `double` remembers multiplier = 2.
// Each returned function keeps access to its own surrounding lexical scope.
