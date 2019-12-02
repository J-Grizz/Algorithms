// Smallest multiple
// Problem 5

// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

const isDiv = (val) => {
  let num = 1;
  for (let x = 1; x <= val; x++) {
    if (num % x !== 0) {
      x = 1;
      num++;
    }
  }
  return num;
}

console.log(isDiv(20));

// Answer: 232792560