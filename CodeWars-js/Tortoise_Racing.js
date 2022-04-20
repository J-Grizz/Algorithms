// Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.

// When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?

// More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

// The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (round down to the nearest second) or a string in some languages.

// If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++, C, Go, Nim, [] for Kotlin or "-1 -1 -1".

// Examples:
// (form of the result depends on the language)

// race(720, 850, 70) => [0, 32, 18] or "0 32 18"
// race(80, 91, 37)   => [3, 21, 49] or "3 21 49"
// ** Note:

// See other examples in "Your test cases".

// In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

// ** Hints for people who don't know how to convert to hours, minutes, seconds:

// Tortoises don't care about fractions of seconds

// Think of calculation by hand using only integers (in your code use or simulate integer division)

// or Google: "convert decimal time to hours minutes seconds"

// Kata rating - 6kyu

// Solved - 27 April 2019

function race(v1, v2, g) {
  let h;// just some casual time variable declaration, we'll use them later..
  let m;
  let s;
  let time;
  let aVel = v1 / 3600;// first convert the fph to fps
  let bVel = v2 / 3600;
  let relVel = bVel - aVel;// then calc the relavtive velocity between B and A
  if (relVel <= 0) {// if A is moving faster than B they will never meet, therefore return null
    return null;
  } else {//but if B is moving faster than A: time = distance/velocity
    time = g / relVel;// and this gives us the time in seconds
    h = Math.floor(time / 3600);//lastly a few sneaky time convertions aaand..
    m = Math.floor((time / 60) - (h * 60));
    s = Math.floor(time - (m * 60) - (h * 3600));
  }
  return [h, m, s]; // Voila!!
}

console.log(race(720, 850, 70)); // returns [ 0, 32, 18 ]
console.log(race(80, 91, 37));   // returns [ 3, 21, 49 ]