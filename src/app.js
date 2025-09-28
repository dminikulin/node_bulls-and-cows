/* eslint-disable no-console */
'use strict';

const readline = require('node:readline');

const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

// Write your code here
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter 4-digit number: ', (userNumber) => {
  const isValid = checkIsValidUserInput(userNumber);

  if (!isValid) {
    console.log('Your input is invalid, try again');
    rl.close();

    return;
  }

  const computerNumber = generateRandomNumber();

  const bullsAndCows = getBullsAndCows(parseInt(userNumber), computerNumber);

  console.log(`Computer has generated: ${computerNumber}`);
  console.log(`Bulls: ${bullsAndCows.bulls}\nCows: ${bullsAndCows.cows}`);

  rl.close();
});
