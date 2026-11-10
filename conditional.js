// Conditional statements are used to perform different actions based on different conditions. In JavaScript, the most common conditional statements are `if`, `else if`, and `else`.

// Example of if statement
let age = 18;
if (age >= 18) {
    console.log("You are eligible to vote.");
}

// Example of if-else statement
let number = 10;
if (number % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}


// Example of if-else if-else statement
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: D");
}

// Example of switch statement
let fruit = "apple";
switch (fruit) {
    case "apple":
        console.log("This is an apple.");
        break;
    case "banana":
        console.log("This is a banana.");
        break;
    case "orange":
        console.log("This is an orange.");
        break;
    default:
        console.log("Unknown fruit.");
}

// Example of ternary operator
let isMember = true;
let discount = isMember ? 0.1 : 0;

let testScore = 75;
let result = testScore >= 60 ? "Pass" : "Fail";
console.log(result); // Output: Pass


let testScore2 = 55;
if (testScore2 >= 60) {
    console.log("Pass");
} else {
    console.log("Fail");
}