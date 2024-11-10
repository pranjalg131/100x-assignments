/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  const inputArray = str.toLowerCase().split("");

  const filteredInputArray = inputArray.filter(char => /[a-z]/.test(char));
  
  const filteredInput = filteredInputArray.join("");
  const filteredInputReverse = filteredInputArray.reverse().join("");

  return filteredInput === filteredInputReverse;

}

module.exports = isPalindrome;
