// -----------------
// Challenge 1 and 2

// // Data 1
// const markHeight = 1.69;
// const markWeight = 78;
// const johnHeight = 1.95;
// const johnWeight = 92;

// // Data 2
// // const markHeight = 1.88;
// // const markWeight = 95;
// // const johnHeight = 1.76;
// // const johnWeight = 85;

// const markBmi = markWeight / markHeight ** 2;
// const johnBmi = johnWeight / johnHeight ** 2;
// const markHigherBMI = markBmi > johnBmi;

// console.log('Mark BMI: ' + markBmi);
// console.log('John BMI: ' + johnBmi);
// console.log('Marks BMI is higher ' + markHigherBMI);

// if (markBmi > johnBmi) {
//     console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi})`);
// } else {
//     console.log(`John's BMI (${johnBmi}) is higher than Mark's (${markBmi})`);
// }

// ----------------------------------
// Challenge 3

// Data 1
// const dolphinsScore1 = 96;
// const dolphinsScore2 = 90;
// const dolphinsScore3 = 89;
// const koalasScore1 = 90;
// const koalasScore2 = 90;
// const koalasScore3 = 89;

// const dolphinsAvgScore = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
// const koalasAvgScore = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

// console.log('Dolphins average score is ' + dolphinsAvgScore);
// console.log('Koalas average score is ' + koalasAvgScore);

// if (dolphinsAvgScore > koalasAvgScore) {
//     console.log('Dolphins win');
// } else if (koalasAvgScore > dolphinsAvgScore) {
//     console.log('Koalas win');
// } else {
//     console.log('Its a draw');
// }

// // Bonus 1
// const minScore = 100;
// if (dolphinsAvgScore > koalasAvgScore && dolphinsAvgScore >= minScore) {
//     console.log('Bonus 1: Dolphins win with more than ' + minScore);
// } else if (koalasAvgScore > dolphinsAvgScore && koalasAvgScore >= minScore) {
//     console.log('Bonus 1: Koalas win with more than ' + minScore);
// } else {
//     console.log('Bonus 1: Its a draw');
// }

// // Bonus 2
// const minScore2 = 100;
// if (dolphinsAvgScore > koalasAvgScore && dolphinsAvgScore >= minScore2) {
//     console.log('Bonus 2: Dolphins win with more than ' + minScore2);
// } else if (koalasAvgScore > dolphinsAvgScore && koalasAvgScore >= minScore2) {
//     console.log('Bonus 2: Koalas win with more than ' + minScore2);
// } else {
//     if (dolphinsAvgScore >= 100 && koalasAvgScore >= 100) {
//         console.log('Bonus 2: Its a draw');
//     } else {
//         console.log('Bonus 2: No winner of trophy');
//     }
// }

// ----------------------------------
// Challenge 4

// const bill = 430;

// const tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`); 

