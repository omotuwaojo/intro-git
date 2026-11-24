// object in javascript is a collection of properties, and a property is an association 
// between a name (or key) and a value. A property's value can be a function, in which
//  case the property is known as a method. Objects can be created using the object 
// literal syntax, the Object constructor, or by using classes.


// Object literal syntax
const person = {
   firstName: "John",
   lastName: "Doe", 
   age: 30,
   fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
// object constructor in JavaScript is a built-in function that allows you to create new objects.
// You can create an object using the Object constructor by calling it with the new keyword,
const car = new Object();
car.make = "Toyota";
car.model = "Camry";
car.year = 2020;

// Class syntax in Javascript is a syntactical sugar over the existing prototype-based inheritance
// and constructor functions. It provides a more elegant and concise way to create objects and deal
// with inheritance. Classes can have constructors, methods, and static methods. 

class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
};

// example of creating an object using
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
};

console.log(book.title); // Output: The Great Gatsby
console.log(book.author); // Output: F. Scott Fitzgerald
console.log(book.year); // Output: 1925

// creating an empty object using the literal syntax
const student = {};

// add properties to the object
student.name = "Alice";
student.age = 20;
student.grade = "A";


// update a property of the object
student.age = 21;

// delete a property from the object
delete student.grade;

// check if a property exists in the object
console.log("name" in student);
console.log("grade" in student);


console.log(student); // Output: { name: "Alice", age: 21, grade: undefined }

// array methods can be used to manipulate objects as well. for example, you can use the 
// Object.keys() method to get an array of the keys of an object properties, 
// and the Object.values() method to get an array of the values of an object's property values.

const person1 = {
  name: "John",
  age: 30,
  city: "New York",
  fullName: function() {
    return this.name + " Doe " |+ this.age + " years old and lives in " + this.city;
  }
};
console.log(person1.fullName()); // Output: john Doe 30 years old and lives in New York

const makeTea = (typeOftea) => {
    return `Making ${typeOftea}`;
};

console.log(makeTea("Green Tea"));
