function repeatedString(s, n) {

  const filtered = s.split("").filter(val => val === "a");
  console.log((filtered.length * (n / s.length)));

}

console.log(repeatedString("gfcaaaecbg", 547602));
//abaabaabaa
console.log(repeatedString("a", 10));
//"aaaaaaaaa" 100




console.log()


