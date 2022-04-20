// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0];

// Kata rating - 5kyu

// Solved - 02 May 2019

function moveZeros(arr) {
  return arr.filter((val) => val !== 0).concat(arr.filter((val) => val === 0));
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
// returns[false,1,1,2,1,3,"a",0,0]