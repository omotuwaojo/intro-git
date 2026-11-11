console.log("hello world");

/*
javascript Data types 

String
Number
Boolean
BigInt
Null
Undefined
Symbol
Object
*/

// String
let name = "Tunde";
console.log(name);

// concatination
let greeting = "Hello, " + name + "!";
console.log(greeting);

let welcomeMessage = `Welcome, ${name}!`;
console.log(welcomeMessage);




//concatenation means joining two or more strings together. e.g
letgreeting = "Hello, " + name + "!";
console.log(greeting);

let welcomeMessage = `Welcome, ${name}!`; // using template literals
console.log(welcomeMessage);


// Number
let age = 20;
console.log(`user age is : ${age}`);



console.log(typeof name);
console.log(typeof age);

// object 
let teaTypes = ["lemon tea", "orange tea", "oolong tea"];// Array
let user = { firstname: "Olaoluwa", lastname: "Adeola"}; // Objectd

console.log(teaTypes);
console.log(user);

// console.log("This is a string");

// Boolean
let isLoggedIn = false;
console.log(isLoggedIn);
console.log(typeof isLoggedIn);

// Null
let emptyValue = null;
console.log(emptyValue);
console.log(typeof emptyValue);


// Undefined    
let undefinedValue;
console.log(undefinedValue);
console.log(typeof undefinedValue);

// Symbol
let symbolValue = Symbol("This is a symbol");
console.log(symbolValue);
console.log(typeof symbolValue);

// BigInt
let bigIntValue = 1234567890123456789012345678901234567890n;
console.log(bigIntValue);
console.log(typeof bigIntValue);


typeof (3.14); // "number"