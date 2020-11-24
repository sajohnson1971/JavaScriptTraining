// const country = 'England';
// const continent = 'Europe';
// const isIsland = true;
// const language = 'English';

// let population = 20000000;//75000000;

// console.log(country);
// console.log(continent);
// console.log(population);

// // use typeof to show the value type stored in the variables
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// console.log(population / 2);

// population++; // increment by 1

// console.log(population);
// console.log(population > 6000000); // is population > 6000000, returns true or false
// console.log(population < 33000000); // is population < than 33000000, returns true or false

// let description = `${country} is in ${continent} and its ${population} people speak ${language}`;
// console.log(description);

// if (population > 33000000) {
//     console.log(`${country}'s population is above average`);
// } else {
//     console.log(`${country}'s population is ${33000000 - population} below average`);
// }

// ***************************
// LECTURE: Equality Operators

// let numNeighbours = Number(prompt("How many neighbour countries does your country have ?"));
// if (numNeighbours === 1) {
//     console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border');
// } else {
//     console.log('No borders');
// }

// **************************
// LECTURE: Logical Operators

// const country = 'England';
// const language = 'English';
// const isIsland = true;
// let population = 75;  // in millions

// if (language === 'English' && population < 50 && !isIsland) {
//     console.log(`You should live in ${country}`);
// } else {
//     console.log(`${country} does not meet your criteria`);
// }

// **************************
// LECTURE: The switch statement

// const language = 'english';

// switch (language) {
//     case 'chinese':
//     case 'mandarin':
//         console.log('Most number of native speakers');
//         break;
//     case 'spanish':
//         console.log('2nd place');
//         break;
//     case 'english':
//         console.log('3rd place');
//         break;
//     case 'hindi':
//         console.log('number 4');
//         break;
//     case 'arabic':
//         console.log('5th most spoken language');
//         break;
//     default:
//         console.log('Great language too!');
// }

// *****************************
// LECTURE: The Ternary Operator

// const country = 'England';
// const continent = 'Europe';
// const isIsland = true;
// const language = 'English';

// let population = 20;

// population > 33 ? console.log(`${country}'s population is above average`) : console.log(`${country}'s population is below average`);

// console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average`);