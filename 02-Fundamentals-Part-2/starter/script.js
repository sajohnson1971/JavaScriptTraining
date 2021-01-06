'use strict';

// *********************
// Functions
// *********************

/*
let hasDriversLicense = false;
const passTest = true;

// this should result in error as hasDriverLicense is not declared
if (passTest) hasDriverLicense = true;

if (hasDriversLicense) console.log('I can drive');

// this should raise an error as interface is reserved
const interface = 'Audio';
*/

/*

// Define a function
function logger() {
    console.log('My name is Stephen');
}

// Invoking, running or calling the function
logger();
logger();
logger();

// Define a function with parameters and return value
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

// Invoking, running or calling the function
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);

*/

/*
// Arrow Function
const calcAge3 = birthYear => 2037 - birthYear;

const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Stephen'));
console.log(yearsUntilRetirement(1980, 'Bob'));
*/

/*
// Function calling other function
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));
*/

/*
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return retirement;
    } else {
        return -1;
    }

}
console.log(yearsUntilRetirement(1991, 'Stephen'));
console.log(yearsUntilRetirement(1970, 'Mike'));
*/

/*
// Coding challenge #1
// Function to calculate average of 3 scores
const calcAverage = (a, b, c) => (a + b + c) / 3;

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log('No team wins');
    }
}

// Test 1 - Calculate the average score for each team
let dolphinsAvgScore = calcAverage(44, 23, 71);
let koalasAvgScore = calcAverage(65, 54, 49);

checkWinner(dolphinsAvgScore, koalasAvgScore);

// Test 2 - Calculate the average score for each team
dolphinsAvgScore = calcAverage(85, 54, 41);
koalasAvgScore = calcAverage(23, 34, 27);

checkWinner(dolphinsAvgScore, koalasAvgScore);
*/

// *********************
// Arrays
// *********************

/*
// Create an array
const friends = ['Michael', 'Steve', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(y);

// Access elements in an array
console.log(friends[0]);
console.log(friends[2]);

// Get number of elements in an array
console.log(friends.length);

// Get last element of an array
console.log(friends[friends.length - 1]);

// Change element value in an array
friends[2] = 'Jay';
console.log(friends);

// Cannot change the whole array, so the following will fail
//friends = ['Bob', 'Alice'];

const firstName = 'Stephen';
const stephen = [firstName, 'Johnson', 2021 - 1971, 'Oracle Developer', friends];
console.log(stephen);

// Excercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/

const friends = ['Michael', 'Steven', 'Peter'];

// Add an element to the end of an array
friends.push('Jay');

// the push method can also return the new length so could use 
const newLength = friends.push('Michelle');

console.log(friends);
console.log(newLength);

// Add an element to the begining of an array, also returns the new length
friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // remove the last element of an array, returns the value of the element removed
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift(); // Remove the first element of an array, also returns the value of element removed
console.log(friends);

// Find the position of a value in the array
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob')); // Returns -1 if not found

// Check if a value is in the array, returns true or false
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));

if (friends.includes('Peter')) {
    console.log('You have a friend called Peter');
}
