// Largest palindrome product
// Problem 4

// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

for (let x = 999; x > 910; x--) {
  for (let y = 999; y > 910; y--) {
    let product = (x * y).toString();
    let half = product.substring(0, 0.5 * product.length);
    let reversedHalf = product
      .slice(0.5 * product.length)
      .split("")
      .reverse()
      .join("");
    if (half === reversedHalf) {
      console.log(x * y);
      return;
    }
  }
}

// Answer: 906609