// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

// Kata rating - 5kyu

// Solved - 30 April 2019

function humanReadable(seconds) {
  var time = seconds / 3600;
  var arr = [];
  arr[0] = Math.floor(time);
  arr[1] = Math.floor((time - arr[0]) * 60);
  arr[2] = Math.round((((time - arr[0]) * 60) - arr[1]) * 60);
  if (arr[0] > 99) {
    return undefined;
  } else {
    return arr.map((each) => each > 9 ? "" + each : "0" + each).join(":");
  }
}

console.log(humanReadable(0));     //returns '00:00:00'
console.log(humanReadable(5));     //returns '00:00:05'
console.log(humanReadable(60));    //returns '00:01:00'
console.log(humanReadable(86399)); //returns '23:59:59'

