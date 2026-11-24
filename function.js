// Function in JavaScript is a block of code designed to perform a particular task. Functions are executed when "invoked" or "called".

function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Alice")); // Output: Hello, Alice!


1./* Write a function named `makeTea` that takes one parameter, `typeOfTea`, and returns a string like `"Making green tea"` when called with `"green tea"`. 
Store the result in a variable named `teaOrder`.
*/

function makeTea(typeOfTea) {
    return `Making ${typeOfTea}`;
}

let teaOrder = makeTea("green tea");
console.log(teaOrder); // Output: Making green tea


// Arrow functions in JavaScript are a more concise way to write functions. They are often used for short, single-line functions and do not have their own `this` context.

// example of an arrow function
const add = (a, b) => a + b;
console.log(add(5, 3)); // Output: 8