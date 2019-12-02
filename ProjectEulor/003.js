// Largest prime factor
// Problem 3

// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

let num = 600851475143;
let factorials = [];
for (let x = 2; x < 200000; x++) {
  if (num % x === 0) {
    num = num / x;
    factorials.push(x);
  }
}
console.log(factorials[factorials.length - 1]);

// Answer: 6857