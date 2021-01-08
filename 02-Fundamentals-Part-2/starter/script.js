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

/*
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

*/

// Coding challenge #2
/*
const calcTip = function (bill) {
    const tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;
    return tip;
}

console.log(calcTip(100));
console.log(calcTip(1000));

const bills = [125, 555, 44];
console.log(bills);

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log(tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);
*/

// *********************
// Objects
// *********************

/*
// This object has 5 properties (firstName, lastName, age, job, friends)
// Object literal syntax
const stephen = {
    firstName: 'Stephen',
    lastName: 'Johnson',
    age: 2021 - 1971,
    job: 'Developer',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(stephen);

// Can use dot or brackets to retrieve the relevant property from the object
console.log(stephen.lastName);
console.log(stephen['lastName']);

// Using the bracket option allows use of expressions
const nameKey = 'Name';
console.log(stephen['first' + nameKey]);
console.log(stephen['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Stephen? Choose between firstName, lastName, age, job and friends');

if (stephen[interestedIn]) {
    console.log(interestedIn);
    console.log(stephen[interestedIn]);
} else {
    console.log('Wrong request');
}

// Add properties to an object
stephen.location = 'Chesterfield';
stephen['email'] = 'stephen.a.johnson@me.com';
console.log(stephen);

// Challenge
// "Stephen has 3 friends, and his best friend is called Michael"
console.log(stephen.firstName + ' has ' + stephen.friends.length + ' and his best friend is called ' + stephen.friends[0]);
*/


// *****************
// Object Methods
// *****************

// Any function attached to an object is called a method
// Needs to be an expression function

/*
const stephen = {
    firstName: 'Stephen',
    lastName: 'Johnson',
    birthYear: 1971,
    job: 'Developer',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    calcAge: function (birthYear) {
        return 2021 - birthYear;
    }
};

// Both these return the same value
console.log(stephen.calcAge(1971));    // dot notaion
console.log(stephen['calcAge'](1971)); // bracket notation

console.log(stephen.calcAge(stephen.birthYear));

*/

/*

// Can use THIS to access an object value within the function
const stephen = {
    firstName: 'Stephen',
    lastName: 'Johnson',
    birthYear: 1971,
    job: 'Developer',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    calcAge: function () {
        console.log(this);
        return 2021 - this.birthYear;
    }
};

console.log(stephen.calcAge());

*/

/*
// This will create a new property called age on the object so that if called multiple times it does not need to be recalculated
const stephen = {
    firstName: 'Stephen',
    lastName: 'Johnson',
    birthYear: 1971,
    job: 'Developer',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    calcAge: function () {
        this.age = 2021 - this.birthYear;
        return this.age;
    }
};

console.log(stephen.calcAge());
console.log(stephen.age);
*/

// Challenge
/*
const stephen = {
    firstName: 'Stephen',
    lastName: 'Johnson',
    birthYear: 1971,
    job: 'Developer',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: false,

    calcAge: function () {
        this.age = 2021 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this['calcAge']()}-year old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
    }
};

console.log(stephen.getSummary());
*/

// Coding challenge #3
/*
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
};

mark.calcBMI();
john.calcBMI();

console.log(mark.BMI, john.BMI);

if (mark.BMI > john.BMI) {
    console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s BMI (${john.BMI})`);
} else if (john.BMI > mark.BMI) {
    console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s BMI (${mark.BMI})`);
}
*/

// **************
// FOR loop
// **************

/*
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting heavy weights repetition ${rep} 🏋️‍♀️`);
}
*/

/*
// Define an array
const stephenArray = [
    'Stephen',
    'Johnson',
    2021 - 1971,
    'developer',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types1 = []; // Create an empty array
const types2 = []; // Create an empty array

// Start from zero for arrays
for (let i = 0; i < stephenArray.length; i++) {
    // display the array value and it's type
    console.log(stephenArray[i], typeof stephenArray[i]);

    // Populate the types1 array at current i position
    types1[i] = typeof stephenArray[i];

    // Populate the types2 array at the end of types2 by using push
    types2.push(typeof stephenArray[i]);
}

console.log(types1);
console.log(types2);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2021 - years[i]);
}

console.log(ages);
*/

// ****************** 
// continue and break
// ******************

/*
const stephenArray = [
    'Stephen',
    'Johnson',
    2021 - 1971,
    'developer',
    ['Michael', 'Peter', 'Steven'],
    true
];

for (let i = 0; i < stephenArray.length; i++) {
    if (typeof stephenArray[i] !== 'string') continue;

    // Will only output if array value is a string
    console.log(stephenArray[i], typeof stephenArray[i]);
}

for (let i = 0; i < stephenArray.length; i++) {
    if (typeof stephenArray[i] === 'number') break;

    // Will only output array values until a number value is read
    console.log(stephenArray[i], typeof stephenArray[i]);
}
*/

// Loop backwards
/*
const stephen = [
    'Stephen',
    'Johnson',
    2021 - 1971,
    'developer',
    ['Michael', 'Peter', 'Steven']
];

for (let i = stephen.length - 1; i >= 0; i--) {
    console.log(stephen[i]);
}

// Loop within a loop

for (let excercise = 1; excercise < 4; excercise++) {
    console.log(`-------- Starting excercise ${excercise}`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weight repetition ${rep}`);
    }
}
*/

// The WHILE Loop

let rep = 1;
while (rep <= 10) {
    console.log(`In a while loop: rep ${rep}`);
    rep++;
}

// Generate a random number between 1 and 6 and loop until a 6 is rolled
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    // Generate next random number
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop about to end...');
}