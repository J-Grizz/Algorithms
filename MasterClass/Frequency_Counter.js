// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

// solved - 02 December 2019

function sameFrequency(numOne, numTwo) {
  const strOne = numOne.toString();
  const strTwo = numTwo.toString();
  let obj = {}
  if (strOne.length !== strTwo.length) return false;
  for (let x = 0; x < strOne.length; x++) {
    let digit = strOne[x];
    obj[digit] = obj[digit] ? obj[digit] + 1 : 1;
  }
  for (let x = 0; x < strTwo.length; x++) {
    let digit = strTwo[x];
    if (obj[digit]) {
      obj[digit] = obj[digit] - 1;
    } else {
      return false;
    }
  }
  return true;
}

