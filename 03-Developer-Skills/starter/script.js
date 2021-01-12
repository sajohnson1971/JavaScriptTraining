// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
const x = 23;

const calcAge = birthYear => 2037 - birthYear;

console.log(`Age ${calcAge(1971)}`);
*/

/*
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
 */

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C) FIX
    value: Number(prompt('Degrees celcius:')),
  };

  //debugger;

  // B) FINDS
  console.table(measurement);

  //console.log(measurement.value);
  //console.warn(measurement.value);
  //console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY
console.log(measureKelvin());
