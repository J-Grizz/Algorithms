// Good morning! Here's your coding interview problem for today.

// This problem was asked by Uber.

// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

// Follow-up: what if you can't use division?

const multiEach = arr => {
  const clone = arr.slice(0);
  for (let x = 0; x < arr.length; x++) {
    arr[x] = 1;
    for (let y = 0; y < clone.length; y++) {
      if (y === x) continue;
      arr[x] *= clone[y];
    }
  }
  return arr;
};

console.log(multiEach([1, 2, 3, 4, 5])); // [ 120, 60, 40, 30, 24 ]
console.log(multiEach([3, 2, 3, 4, 5])); // [ 120, 180, 120, 90, 72 ]

//Solved - 30 May 2019;

