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
