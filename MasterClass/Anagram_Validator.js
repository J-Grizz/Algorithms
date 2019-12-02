function validAnagram(strOne, strTwo) {
  if (strOne.length !== strTwo.length) return false;
  const objOne = {};
  const objTwo = {};
  for (let x = 0; x < strOne.length; x++) {
    objOne[strOne[x]] = (objOne[strOne[x]] ? objOne[strOne[x]] : 0) + 1;
    objTwo[strTwo[x]] = (objTwo[strTwo[x]] ? objTwo[strTwo[x]] : 0) + 1;
  }
  for (let key in objOne) {
    if (objTwo[key] !== objOne[key]) return false;
  }
  return true;
}