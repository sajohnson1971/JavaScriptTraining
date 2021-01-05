'use strict';

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
