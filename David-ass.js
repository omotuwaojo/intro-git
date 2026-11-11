// step 1: Use if, else if and else to set greeting: "Good morning" if hour < 12, "Good day" if hour < 18, else "Good evening"

let hour=15;
if (hour < 12) {
    console.log("Good Morning")
}else if (hour <18) {
    console.log("Good Day")
} else{
    console.log("Good Evening")
}

// step 2: Use a ternary operator to set greeting to "Enjoy your weekend" if isweekend is true, else keep the greeting from step 1

let isweekend = true;
let greeting = isweekend ? "Enjoy your weekend" : (hour < 12 ? "Good Morning" : (hour < 18 ? "Good Day" : "Good Evening"));
console.log(greeting);


// step 3: Log the greeting to the console
console.log(greeting);
