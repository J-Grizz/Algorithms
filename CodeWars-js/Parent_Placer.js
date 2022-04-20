// Mothers arranged a dance party for the children in school. At that party, there are only mothers and their children. All are having great fun on the dance floor when suddenly all the lights went out. It's a dark night and no one can see each other. But you were flying nearby and you can see in the dark and have ability to teleport people anywhere you want.

// Legend:
// -Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".
// -Function input: String contains only letters, uppercase letters are unique.
// Task:
// Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb".

// Kata rating - 6kyu

// Solved - 02 May 2019

function findChildren(dancingBrigade) {
  var children = dancingBrigade.split("").filter((val) => val === val.toLowerCase());
  var parents = dancingBrigade.split("").sort().filter((val) => val === val.toUpperCase());
  var finStr = "";
  for (var x = 0; x < parents.length; x++) {
    finStr += parents[x];
    children.forEach((val) => {
      if (val.toUpperCase() === parents[x]) {
        finStr += val;
      }
    });
  }
  return finStr;
};

console.log(findChildren("beeeEBb"));   // returns "BbbEeee"
console.log(findChildren("uwwWUueEe")); // returns "EeeUuuWww"
