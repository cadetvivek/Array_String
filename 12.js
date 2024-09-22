// Missing Vowels

// Description
// You are given a string, stored in a variablestr, and the length of the string is stored in the variableN

// You have to find all the vowels that are not present in the string and print them.
// If a string contains all the vowels, in that case, print -1.
// For example, consider the value stored inN = 6, andstr = nature
// out of the 5 vowels(a,e,i,o,u)
// the word "nature" contains a,u,e
// The vowel that are not present in the string are : i,o
// hence the output is io
// Note : The string contains only lower case English Alphabets

// Input Description
// The first line of the input contains the value stored inN
// The second line of the input contains the value stored instr

// Output Description
// Print all the vowels that are not present in the given string.


function missingVowel(N, str) {

  //write code here
  let obj = {};
  let vowel = 'aeiou';
  for (let i = 0; i < str.length; i++){
    if(vowel.includes(str[i])){
      obj[str[i]] = 1;
    }
  }
  let bag = '';
  for (let i = 0; i < vowel.length; i++ ){
    if(!obj[vowel[i]]){
      bag+=vowel[i];
    }
  }
  if(bag==''){
    console.log(-1)
  }else{
    console.log(bag)
  }
}
missingVowel(6, 'nature')