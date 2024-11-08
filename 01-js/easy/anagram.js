/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  if(str1.length != str2.length) return false;

  const count1 = new Map();
  const count2 = new Map();

  for(let i = 0; i < str1.length; i++){
    let curr = str1[i].toLowerCase();

    if(count1.has(curr)){
      count1.set(curr, count1.get(curr) + 1);
    } else count1.set(curr, 1);
  }

  for(let i = 0; i < str2.length; i++){

    let curr = str2[i].toLowerCase();

    if(count2.has(curr)){
      count2.set(curr, count2.get(curr) + 1);
    } else count2.set(curr, 1);
  }

  for( let [key, value] of count1){
    if(count1.get(key) !== count2.get(key)){
      return false;
    }
  }

  return true;
  
}

module.exports = isAnagram;
