// Sum square difference
// Problem 6

// The sum of the squares of the first ten natural numbers is,

// 12 + 22 + ... + 102 = 385
// The square of the sum of the first ten natural numbers is,

// (1 + 2 + ... + 10)2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

function sumSquare(num) {
  let sumOfSquares = 0;
  let squareOfsums = 0;
  let result;
  for (let x = 1; x <= num; x++) {
    sumOfSquares += Math.pow(x, 2);
    squareOfsums += x;
  }
  result = Math.pow(squareOfsums, 2) - sumOfSquares;
  return result;
}

console.log(sumSquare(100));

// Answer: 25164150