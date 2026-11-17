// Array Operations in javascript

// Creating and Accessing Arrays
let teaFlavors = ["green tea", "black tea", "oolong tea"];
let firstFlavor = teaFlavors[0];
let secondFlavor = teaFlavors[1];
console.log(`The first tea flavor is: ${firstFlavor}`);
console.log(`The first tea flavor is: ${secondFlavor}`);

// Modifying Arrays
let teaTypes = ["herbal tea", "white tea", "masala chai"];
teaTypes[1] = "matcha tea"; 
console.log(`The modified tea types are: ${teaTypes}`);


// Adding Elements to Arrays
let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("Berlin");
console.log(`Cities visited: ${citiesVisited}`);

// Removing Elements from Arrays
let teaOrders= ["chai", "iced tea", "earl grey"];
teaOrders.pop(); 
console.log(`Tea orders after removing the last element: ${teaOrders}`);

// Creating copies of Arrays
let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = [...popularTeas];
console.log(`Soft copy of popular teas: ${softCopyTeas}`);

let topCities = ["New York", "London", "Tokyo"];
let hardCopyCities = JSON.parse(JSON.stringify(topCities));
console.log(`Hard copy of top cities: ${hardCopyCities}`);
topCities.push("Paris");
console.log(`Updated top cities: ${topCities}`);

// Merging Arrays
let europeanCities = ["Paris", "Berlin"];
let asianCities = ["Tokyo", "Beijing"];
let mergedCities = [...europeanCities, ...asianCities];
console.log(`Merged cities: ${mergedCities}`);


// Array Length
let teaMenu = ["green tea", "black tea", "oolong tea"];
let menuLength = teaMenu.length;
console.log(`The length of the tea menu is: ${menuLength}`);

// Checking for Element Existence 
let cityBucket = ["New York", "London", "Tokyo"];
let isCityPresent = cityBucket.includes("London");
console.log(`Is London present in the city bucket? ${isCityPresent}`);