'use strict';

let hasDriversLicense = false;
const passTest = true;

// this should result in error as hasDriverLicense is not declared
if (passTest) hasDriverLicense = true;

if (hasDriversLicense) console.log('I can drive');

// this should raise an error as interface is reserved
const interface = 'Audio';

