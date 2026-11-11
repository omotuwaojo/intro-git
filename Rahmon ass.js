// working  with the variable price and quantity, create a variable named total with let: price times quantity

// let price = 10;
// let quantity = 5;

// step 1: Create a variable named total with let: price times quantity

// step 2: multiply price and quantity to get total

//  step 3: Add 5 to the total  with the += operator

// step 4: compare the total to 100 with an if statement, if total is greater than 100, log "Total is greater than 100", else log "Total is less than or equal to 100"

// solution
let price = 10;
let quantity = 5;

let total = price * quantity;
total += 5;

if (total > 100) {
  console.log("Total is greater than 100");
} else {
  console.log("Total is less than or equal to 100");
}

// Assignment 2

// let hour = 14;
// let isweekend = false;
// let greeting;


// step 1: Use if, else if and else to set greeting: "Good morning" if hour < 12, "Good day" if hour < 18, else "Good evening"

// step 2: Use a ternary operator to set greeting to "Enjoy your weekend" if isweekend is true, else keep the greeting from step 1

// step 3: Log the greeting to the console

//Solution

let hour = 14;
let isweekend = false;
let greeting;

if (hour < 12) {
  greeting = "Good morning";
} else if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

greeting = isweekend ? "Enjoy your weekend" : greeting;

console.log(greeting);
