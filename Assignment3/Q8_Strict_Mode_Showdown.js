"use strict";

// Q8 – Strict Mode Showdown
// The original function cannot even be parsed in strict mode because duplicate
// parameter names are forbidden. In non-strict classic scripts, duplicate
// parameters may be accepted, but `total = 10` creates/updates a global if no
// global binding exists, and deleting an unqualified identifier is invalid syntax
// in modern JavaScript (delete total is a SyntaxError).

// Correct ES6 version:
function demo(firstNumber, secondNumber) {
    const total = 10;
    console.log(`Arguments: ${firstNumber}, ${secondNumber}; total: ${total}`);
    return total;
}

demo(5, 10);

// A safe way to demonstrate strict-mode errors without stopping this file is to
// compile code strings with Function. The Function constructor body is not strict
// unless the directive is included, so each case is isolated in try/catch.
const strictExamples = [
    {
        label: "Duplicate parameters in strict mode",
        source: '"use strict"; function sample(a, a) { return a; } sample(1, 2);'
    },
    {
        label: "Undeclared assignment in strict mode",
        source: '"use strict"; function sample() { total = 10; } sample();'
    },
    {
        label: "Delete identifier in strict mode",
        source: '"use strict"; let total = 10; delete total;'
    }
];

for (const example of strictExamples) {
    try {
        Function(example.source)();
        console.log(`${example.label}: no error`);
    } catch (error) {
        console.log(`${example.label}: ${error.name} — ${error.message}`);
    }
}

// Note: Function() is used only to demonstrate language behavior, not as a
// recommended way to execute application code. Avoid eval/Function for real apps.
