// loops are used to repeat a block of code multiple times based on a condition
// There are different types of loops in JavaScript, including for, while, and do-while loops

// for loop
// for (let i = 10; i < 15; i++) {
//     console.log(`This is iteration number ${i}`);
// }


// while loop loops through a block of code as long as a specified condition is true
// let j = 0;
// while (j < 5) {
//     console.log(`This is iteration number ${j}`);
//     j++;
// }

// do-while loop loops through a block of code once, and then repeats the loop as long as a specified condition is true
// let k = 6;
// do {
//     console.log(`This is iteration number ${k}`);
//     k++;
// } while (k < 5);


// Break statement is used to exit a loop or switch statement before it has completed all its iterations
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(`This is iteration number ${i}`);
}

// Continue statement is used to skip the current iteration of a loop and move on to the next iteration
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(`This is iteration number ${i}`);
}