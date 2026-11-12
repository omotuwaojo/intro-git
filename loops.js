// loops are used to repeat a block of code multiple times until a certain condition is met. There are several types of loops in JavaScript, including:while, do...while, and for...in loops. Each type of loop has its own syntax and use cases.

// 1. For Loop
// The for loop is used when you know how many times you want to execute a block of code.

// for loop
for (let i = 0; i < 5; i++) {
    console.log(i); 
}

// 2. While Loop
// The while loop is used when you want to execute a block of code as long as a specified condition is true.

let j = 0;
while (j < 5) {
    console.log(`This is iteration number ${j}`);
    j++;
}

// 3. Do...While Loop
// The do...while loop is similar to the while loop, but it guarantees that the block of code will be executed at least once, even if the condition is false.
let k = 7;
do {
    console.log(`This is iteration number ${k}`);
    k++;
} while (k < 5);

// Break statement
// The break statement is used to exit a loop before it has completed all its iterations. It can be used in any type of loop.
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i); // Output: 0, 1, 2, 3, 4
}
// Continue statement
// The continue statement is used to skip the current iteration of a loop and move on to the next iteration. It can be used in any type of loop.
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i); // Output: 0, 1, 2, 3, 4, 6, 7, 8, 9
}