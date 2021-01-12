// STRICT mode, always at the top
'use strict';

// **********
// Declare variables using let if the value will change
// Declare variables using const if the value will not change
// **********

let age = 30;
age = 31;

const birthYear = 1971;

// Use typeof to identify the type of a value
console.log(typeof birthYear);

// Types of variable
// number     - used for decimals and integers
// string     - used for characters, can use ' or "
// boolean    - logical, true or false
// undefined  - value taken by a variable that is not yet defined (empty)
// null       - Also means empty value
// symbol     - (ES2015) value that is unique and cannot be changed
// bigint     - (ES2020) larger integers than number can hold

// **********
// Truthy and Falsy Values
// **********

// There are 5 falsy values:
// 0
// "
// undefined
// null
// NaN

console.log(Boolean(0)); // return false
console.log(Boolean(undefined)); // return false
console.log(Boolean('Jonas')); // return true
console.log(Boolean({})); // return true
console.log(Boolean('')); // return false

// returns 'You should get a job'. JavaScript uses coercion to convert money into a boolan and 0 is a falsy value
const money = 0;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job');
}

// Returns 'Height is undefined'. JavaScript uses coercion to convert height into a boolean and undefined is a falsy value
let height;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}

// **********
// Concatonate strings
// **********

console.log('I am ' + age + ' years old');
console.log('String with \n\ multiple \n\ lines');

console.log(`I am ${age} years old`);
console.log(`String with 
multiple 
lines`);

// **********
// Switch statement, an alternative to if and else but is not used very often
// **********

const day = 'monday';
switch (day) {
    case 'monday':
        console.log('Do this on a Monday');
        break;
    case 'tuesday':
        console.log('Do this on a Tuesday');
        console.log('and this');
        break;
    default
        console.log('Default');
}

// **********
// If statement
// **********

if (age >= 18) {
    console.log('I am an adult');
} else if (age >= 13 && age < 18) {
    console.log('I am a teenager');
} else {
    console.log('I am a child');
}

// **********
// AND, OR and NOT OPERATORS
// **********

// AND = &&
// OR  = ||
// NOT = !

// **********
// Equality operators
// **********

if (age === 18) {
    console.log('I am 18 years old');
}

if (age !== 18) {
    console.log('I am not 18 years old');
}

// **********
// Ternary OPERATOR
// An if/else statement in one line
// **********

age >= 18 ? console.log('Adult') : console.log(child);

const adult = age >= 18 ? 'true' : 'false';
console.log(adult);

console.log(`I am an adult: ${age >= 18 ? 'true' : 'false'}`);

// **********
// Assignment OPERATORS
// **********

age += 10; // instead of age = age + 10;

age++; // instead of age = age + 1;
age--; // instead of age = age - 1;

// **********
// FUNCTIONS
// **********

// Function declaration, can be called before the function is declared in the code
function calcAge1(birthYear) {
    return 2021 - birthYear;
}

// Expression function, must be declared before called
const calcAge2 = function (birthYear) {
    return 2021 - birthYear;
}

// Arrow function, must be declared before called
const calcAge3 = birthYear => 2021 - birthYear;

// **********
// ARRAYS
// **********

// Declare an array
const friends = ['friend 1', 'friend 2', 'friend 3', 'etc'];
// or
const birthYears = new Array(1971, 1973, 2003, 1997);

const emptyArray = [];

// Access elements in an array
console.log(friends[0]);
console.log(friends[2]);

// Get number of elements in an array
console.log(friends.length);

// Get last element of an array
console.log(friends[friends.length - 1]);

// Change element value in an array
friends[2] = 'Jay';

// **********
// Basic ARRAY Methods
// push      - Add an element to the end of an array
// unshift   - Add an element to the beginning of an array
// pop       - remove the last element of an array
// shift     - Remove the first element of an array
// indexof   - Find the position of a value in the array
// includes  - Check if a value is in the array
// concat    - Merge arrays
// **********

// Add an element to the end of an array
friends.push('friend 4');

// the push method can also return the new length so could use 
const newLength = friends.push('friend 5');

// Add an element to the beginning of an array, also returns the new length
friends.unshift('friend 0');

// Remove elements
friends.pop(); // remove the last element of an array, returns the value of the element removed
const popped = friends.pop();

friends.shift(); // Remove the first element of an array, also returns the value of element removed

// Find the position of a value in the array
console.log(friends.indexOf('friend 1'));
console.log(friends.indexOf('Bob')); // Returns -1 if not found

// Check if a value is in the array, returns true or false
console.log(friends.includes('friend 1'));
console.log(friends.includes('Bob'));

if (friends.includes('friend 1')) {
    console.log('You have a friend called friend 1');
}

// Merge two arrays
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3);

// **********
// OBJECTS
// **********

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

// "Stephen has 3 friends, and his best friend is called Michael"
console.log(stephen.firstName + ' has ' + stephen.friends.length + ' and his best friend is called ' + stephen.friends[0]);

// **********
// OBJECT Methods
// **********

// Any function attached to an object is called a method.
// Needs to be an expression function.

const stephen = {
    firstName: 'Stephen',
    LastName: 'Johnson',
    birthYear: 1971,
    job: 'Developer',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    calcAge: function (birthYear) {
        return 2021 - birthYear;
    }
};

// Both these return the same value
console.log(stephen.calcAge(1971)); // dot notaion
console.log(stephen['calcAge'](1971)); // bracket notation

// Use the method on an object
console.log(stephen.calcAge(stephen.birthYear));

// **********
// THIS
// **********

// Can use THIS to access an object value within the function.  Could hard code the object name but is not recommended
const stephen = {
    firstName: 'Stephen',
    lastName: 'Johnson',
    birthYear: 1971,
    job: 'Developer',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    calcAge: function () {
        this.age = 2021 - this.birthYear; // Add age to the object
        return 2021 - this.age;
    }
};
console.log(stephen.calcAge());

// **********
// The FOR Loop
// **********

// The for loop has three parts
// 1) Defaine a variable (counter) which will hold the start value
// 2) A logical condition
// 3) Update the counter

for (let rep = 1; rep <= 10; rep = rep + 1) {

}

// or
for (let rep = 1; rep <= 10; rep++) {

}

// Loop through an array
const stephenArray = [
    'Stephen',
    'Johnson',
    2021 - 1971,
    'developer',
    ['Michael', 'Peter', 'Steven'],
    true
];

for (let i = 0; i < stephenArray.length; i++) {
    // display the array value and it's type
    console.log(stephenArray[i], typeof stephenArray[i]);
}

// Using CONTINUE
// i.e. skip iterations if condition met
for (let i = 0; i < stephenArray.length; i++) {
    if (typeof stephenArray[i] !== 'string') continue;
    // Will only output if array value is a string
    console.log(stephenArray[i], typeof stephenArray[i]);
}

// Using BREAK
// i.e. exit the loop if condition met
for (let i = 0; i < stephenArray.length; i++) {
    if (typeof stephenArray[i] === 'number') break;
    // Will only output array values until a number value is read
    console.log(stephenArray[i], typeof stephenArray[i]);
}

// Loop backwards
for (let i = stephen.length - 1; i >= 0; i--) {
    console.log(stephen[i]);
}

// **********
// The WHILE Loop
// **********

// Can use WHILE instead of a FOR loop, like so
let rep = 1;
while (rep <= 10) {
    console.log(`In a while loop: rep ${rep}`);
    rep++;
}

// Alternatively, Use WHILE when you don't know how long to loop for
// Generate a random number between 1 and 6 and loop until a 6 is rolled
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    // Generate next random number
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop about to end...');
}


// ***************************************

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  
  // Set max and min variables to first element of the array
  let max = temps[0];
  let min = temps[0];
  
  // Loop through each value in the array
  for (let i = 0; i < temps.length; i++) {
    
    const currTemp = temps[i];
    
    // If the value is not a number then skip to next iteration
    if (typeof currTemp !== 'number') continue;
    
    // If array current value is greater than max then update max
    if (currTemp > max) max = currTemp;
    
    // If array current value is lower than min then update min
    if (currTemp < min) min = currTemp;

  }
  console.log(`Max temp ${max}`, `Min temp ${min}`);
  // Return the amplitude
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);