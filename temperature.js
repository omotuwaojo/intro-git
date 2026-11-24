// Temperature Converter
const prompt = require('prompt-sync')();

let celsius = parseFloat(prompt("Enter temperature in Celsius:"));
let fahrenheit = (celsius * 9/5) + 32;
console.log(`The temperature in Fahrenheit is: $ {celsius}°C = ${fahrenheit}°F`);