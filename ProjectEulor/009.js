// Special Pythagorean triplet
// Problem 9

// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

let a = 1;
let b = 2;
let c = 997;
while (c > b) {
  a++;
  b++;
  c = c - 2;
}
console.log(a, b, c)