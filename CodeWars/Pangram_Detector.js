// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// Kata rating - 6kyu

// Solved - 05 May 2019

//Excuse the terrible readablity, I was experimenting with single line solutions.
const isPangram = (string) => string.toLowerCase().split('').sort().filter((v, i, arr) => arr.indexOf(v) === i).join('').match(/[a-z]+/g).toString() === 'abcdefghijklmnopqrstuvwxyz' ? true : false;

console.log(isPangram("The quick brown fox jumps over the lazy dog")); // returns true
console.log(isPangram("blah blah BLAH"))                               // returns false
