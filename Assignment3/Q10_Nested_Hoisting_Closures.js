"use strict";

// Q10 – Nested Hoisting and Closures
function outer() {
    console.log("outer count before assignment:", count); // undefined
    var count = 5;

    function inner() {
        console.log("inner count before assignment:", count); // undefined
        var count = 10; // This local var shadows outer's count.
        console.log("inner count after assignment:", count); // 10
    }

    inner();
    console.log("outer count after inner():", count); // 5
}

outer();

// Arrow-function version:
// The arrow function does not create its own `this`, `arguments`, or super binding,
// but it DOES have its own local variables. Therefore `var count` inside this
// arrow function still shadows outer's count and logs undefined, then 10.
function outerWithArrow() {
    console.log("arrow example outer count before assignment:", count); // undefined
    var count = 5;

    const innerArrow = () => {
        console.log("arrow inner count before assignment:", count); // undefined
        var count = 10;
        console.log("arrow inner count after assignment:", count); // 10
    };

    innerArrow();
    console.log("arrow example outer count after inner:", count); // 5
}

outerWithArrow();

// Debug call stack: outer -> inner (or innerArrow) -> return to outer.
// Break at each console.log and inspect the separate local scopes in VARIABLES.
// Hoisting creates a local `count` binding in each function before that function runs.
