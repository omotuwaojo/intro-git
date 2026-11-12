// ASSIGNMENT 2

let hour = 14;
let isweekend = false;
let greeting;

// step 1: Use if, else if and else to set greeting: "Good morning" if hour < 12, "Good day" if hour < 18, else "Good evening"
if (hour < 12) {
    greeting = "Good morning";
} else if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

// step 2: Use a ternary operator to set greeting to "Enjoy your weekend" if isweekend is true, else keep the greeting from step 1
// greeting = isweekend ? "Enjoy your weekend" : greeting;
let hour1 = 11;
let greeting1 = (hour1 < 12) ? "Enjoy Your Weekend" : "Good day";
// step 3: Log the greeting to the console
console.log(greeting1);