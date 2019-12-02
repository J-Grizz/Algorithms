// Good morning! Here's your coding interview problem for today.

// This problem was recently asked by Google.

// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// Bonus: Can you do this in one pass?

const addUpTo = (arr, k) => {
  for (let x = 0; x < arr.length - 1; x++) {
    for (let y = x + 1; y < arr.length; y++) {
      if (arr[x] + arr[y] === k) {
        return true;
      }
    }
  }
  return false;
};

console.log(addUpTo([9, 1, 1, 8, 1, 5, 10], 18));  // true
console.log(addUpTo([9, 2, 2, 8, 43, 3, 10], 6));  // false

//Solved - Wed 29 May 2019;
