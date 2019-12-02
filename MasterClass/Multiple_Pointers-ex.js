function countUniqueValues(arr) {
  let result = 0;
  for (let x = 0; x < arr.length; x++) {
    if (arr[x] !== arr[x - 1]) result++;
  }
  return result;
}