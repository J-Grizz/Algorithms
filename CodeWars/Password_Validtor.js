// In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore

// Kata rating - 5kyu

// Solved - 29 April 2019

function alphanumeric(string) {
  return /\s+|_|[.*!+?^${}()|[\]\\]/ig.test(string) ? false : /\w+/ig.test(string);
}

console.log(alphanumeric("hello world_")) // returns false;
console.log(alphanumeric("PassW0rd"))     // returns true;