/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  let ans = 0;
  for(let i = 0; i < str.length; i++){
    let currChar = str[i].toLowerCase();

    if(vowels.indexOf(currChar) != -1){
      ans++;
    }
  }

  return ans;
}

module.exports = countVowels;