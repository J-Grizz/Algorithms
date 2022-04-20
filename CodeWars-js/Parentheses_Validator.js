// Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

// Kata rating - 5kyu

// Solved - 03 May 2019

function validParentheses(parens) {
  let lCount = 0;
  let rCount = 0;
  let lst = parens.length - 1;
  if (parens[0] === ")" || parens[lst] === "(") {
    return false;
  };
  parens.split('').forEach((val) => {
    if (val === "(") {
      lCount++;
    } else if (val === ")") {
      rCount++;
    }
  });
  if (rCount === lCount) {
    return true
  } else {
    return false;
  }
}

console.log(validParentheses("()()((())"));              // returns false 
console.log(validParentheses("(())()()()()()()()(())")); // returns true 



