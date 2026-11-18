// Array Operations in JavaScript

// 1. Creating and Accessing Arrays
let teaFlavors = ["green tea", "black tea", "oolong tea"];
let firstTea = teaFlavors[0];
let thiredTea = teaFlavors[2];
// console.log(`The first tea flavor is: ${firstTea}`);

let cities = ["London", "Tokyo", "Paris", "New York"];
let favoriteCity = cities[2];
// console.log(`My favorite city is: ${favoriteCity}`);

// 2. Modifying Arrays
let teaTypes = ["herbal tea", "white tea", "masala chai"];
teaTypes[1] = "jasmine tea";
// console.log(`Updated tea types: ${teaTypes}`);

// 3. Adding Elements to Arrays
let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("Berlin");
// console.log(`Cities visited: ${citiesVisited}`);

// 4. Removing Elements from Arrays
let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
let lastOrder = teaOrders.pop();
// console.log(`Last tea order removed: ${lastOrder}`);

// 5. Creating Copies of Arrays
let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = [...popularTeas];
// console.log(`Soft copy of popular teas: ${softCopyTeas}`);
// console.log(`Original popular teas: ${popularTeas}`);

let topCities = ["Berlin", "Singapore", "New York"];
let hardCopyCities = JSON.parse(JSON.stringify(topCities));
// console.log(`Hard copy of top cities: ${hardCopyCities}`);
// topCities.push("Barcelona");
// topCities.pop();
// console.log(`Updated top cities: ${topCities}`);

// 6. Merging Arrays
let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
let worldCities = [...europeanCities, ...asianCities];
// console.log(`Merged world cities: ${worldCities}`);

// 7. Array Length
let teaMenu = ["masala chai", "oolong tea", "green tea", "earl grey"];
let menuLength = teaMenu.length;
console.log(`Number of tea options: ${menuLength}`);

// 8. Checking for Element Existence
let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];
let isLondonInList = cityBucketList.includes("London");
console.log(`Is London in the bucket list? ${isLondonInList}`);

