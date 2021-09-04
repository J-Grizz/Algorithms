function bubbleSort(arr) {
  let arrLength = arr.length
  let sortedArr = [];
  for (let y = 0; y < arrLength; y++) {
    sortedArr.push(largestNum(arr));
  }
  return sortedArr;
}


function largestNum(arr) {
  let prev = arr[0];
  for (let x = 1; x < arr.length; x++) {
    let curr = arr[x];
    if (prev < curr) {
      arr[x] = prev;
      arr[x - 1] = curr;
    }
    prev = arr[x];
  }
  return arr.pop();
}


console.log(bubbleSort(["a", "abc", "ab", "b", "a", "e", "p", "bac", "g"]))
console.log(bubbleSort([1, 4, 8, 45, 32, 12, 34, 54, 989, 32, 12]))
console.log(bubbleSort([102, 12, 6438887, 1, 2, 3, 4, 1, 3, 10, 32, 1, 1, 45, 10, 67, "a", "b", "c", "a"]))