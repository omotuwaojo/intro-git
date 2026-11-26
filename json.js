// JSON in javascript is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is based on a subset of the JavaScript Programming Language, Standard ECMA-262 3rd Edition - December 1999. JSON is built on two structures:

// 1. A collection of name/value pairs. In various languages, this is realized as an object, record, struct, dictionary, hash table, keyed list, or associative array.
// 2. An ordered list of values. In most languages, this is realized as an array, vector, list, or sequence.

// What is JSON Used for?
// JSON is used primarily to send, receive, and store data. It is often used when data is sent from a server to a web page. JSON is a language-independent data format. It was derived from JavaScript, but many modern programming languages include code to generate and parse JSON-format data.

// JSON Syntax Rules
// JSON syntax is a subset of JavaScript object notation syntax. Here are the basic rules:
// Data is in name/value pairs
// Data is separated by commas
// Curly braces hold objects
// Square brackets hold arrays

// Example of JSON data
const jsonData = {
    "name": "John Doe",
    "age": 30,
    "isStudent": false,
    "courses": ["Math", "Science", "History"],
    "address": {
        "street": "123 Main St",
        "city": "Anytown",
        "zip": "12345"
    }
};


// Converting JSON to a JavaScript Object
// You can convert JSON data into a JavaScript object using the `JSON.parse()` method. This allows you to work with the data in your JavaScript code.

const jsObject = JSON.parse(jsonData);

// Converting a JavaScript Object to JSON
// You can convert a JavaScript object into a JSON string using the `JSON.stringify()` method. This is useful for sending data to a server or storing it in a file.
const jsonString = JSON.stringify(jsObject);

// Example of using JSON.parse() and JSON.stringify()
const jsonStringExample = '{"name":"Jane Doe","age":25,"isStudent":true}';

const jsObjectExample = JSON.parse(jsonStringExample);

const jsonStringExample2 = JSON.stringify(jsObjectExample);

console.log(jsObjectExample.name); // Output: Jane Doe

// accessing the properties of the JSON 

// two ways to access the properties of a JSON object in JavaScript: dot notation and bracket notation.

// Dot Notation
console.log(jsObject.name); // Output: John Doe
console.log(jsObject.age); // Output: 30
console.log(jsObject.isStudent); // Output: false
console.log(jsObject.courses); // Output: ["Math", "Science", "History"]
console.log(jsObject.address); // Output: {street: "123 Main St", city: "Anytown", zip: "12345"}


// Bracket Notation
console.log(jsObject["name"]); // Output: John Doe
console.log(jsObject["age"]); // Output: 30
console.log(jsObject["isStudent"]); // Output: false    
console.log(jsObject["courses"]); // Output: ["Math", "Science", "History"]
console.log(jsObject["address"]); // Output: {street: "123 Main St", city: "Anytown", zip: "12345"}


// JSON Arrays 
console.log(jsObject.courses[0]); 


// Accessing nested JSON objects
console.log(jsObject.address.street)

// modify nested properties

jsObject.address.city =  "Lagos";
console.log(jsObject.address.city)

jsObject.age = 20;
console.log(jsObject.age)


jsObject.courses[0] = "Computer Science";

console.log(jsObject.courses);

// Adding new properties

jsObject.email = "john@example.com";

// add new nested property

jsObject.address.country = "Nigeria";

// add another course
jsObject.courses.push("programming");

// Deleting poperties
delete jsObject.isStudent;





