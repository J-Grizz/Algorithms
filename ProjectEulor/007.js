// 10001st prime
// Problem 7

// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number?

function isThisPrime(num) {
  for (var x = 2; x < num; x++) {
    if (num % x === 0) {
      return false;
    }
  }
  return true;
}

function tenThFstPrim() {
  let num = 2;
  let numOfPrimes = 0;
  while (numOfPrimes < 10001) {
    if (isThisPrime(num)) {
      numOfPrimes++;
      num++;
    } else {
      num++;
    }
  }
  num--;
  return (num);
}

console.log(tenThFstPrim());

// Answer: 104743