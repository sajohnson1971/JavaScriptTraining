/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);
*/

/*
console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // 617
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143
*/

/*
console.log(Boolean(0));         // return false
console.log(Boolean(undefined)); // return false
console.log(Boolean('Jonas'));   // return true
console.log(Boolean({}));        // return true
console.log(Boolean(''));        // return false

// returns 'You should get a job'. JavaScript uses coercion to convert money into a boolan and 0 is a falsy value
const money = 0;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job');
}

// Returns 'Height is undefined'. JavaScript uses coercion to convert height into a boolan and undefined is a falsy value
let height;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}
*/

/*
// in this example, both statements are true
const age = 18;
if (age === 18) console.log('You just became an adult :D (strict)');
if (age == 18) console.log('You just became an adult :D (loose)');

// in this example, only the second statement is true as 18 and '18' are different types so the first statement is false
const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');
if (age == 18) console.log('You just became an adult :D (loose)');
*/

/*
const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
    console.log('7 is an amazing number!');
} else {
    console.log('Number is not 23 or 7');
}
*/

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision); // returns false as B is false
// console.log(hasDriversLicense || hasGoodVision); // returns true as A is true
// console.log(!hasDriversLicense); // returns false as A is true

// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive');
// } else {
//     console.log('Someone else should drive');
// }

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B
// const isTired = true; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive');
// } else {
//     console.log('Someone else should drive');
// }

// const day = 'monday';

// // Performs strict comparison ===
// switch (day) {
//     case 'monday':
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory video');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend');
//         break;
//     default:
//         console.log('Not a valid day!');
// }

// if else statement all in one line
// has three parts: condition, if and else
// const age = 24;
// age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

// const age = 24;
// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

// const age = 24;
// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`)