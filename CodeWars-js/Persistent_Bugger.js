// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example:

//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                        // and 4 has only one digit

//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2

//  persistence(4) === 0 // because 4 is already a one-digit number

// Kata rating - 6kyu

// Solved - 06 May 2019

const persistence = (num) => {
  let result = 0;
  while (num !== multiplier(num)) {
    result++;
    num = multiplier(num);
  }
  return result;
}

const multiplier = (num) => {
  var arr = num.toString().split('');
  var multiplied = 1;
  for (var x = 0; x < arr.length; x++) {
    multiplied *= arr[x];
  }
  return multiplied;
}

console.log(persistence(39));  // returns 3
console.log(persistence(999)); // returns 4
console.log(persistence(4));   // returns 0



