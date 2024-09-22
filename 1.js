// You are given an array of strings sentences, where each sentences[i] represents a single sentence.
// Return the index of sentence that contain maximum number of alphabet 'a' in a single sentence.
// Example 1:-
// Input: sentences = ["ananya loves sharpener", "apple is a very healthy fruit", "this is great thanks very much"]
// Output : 0 ( Array Index of String containing maximum number of 'a' )
let sentences = ["ananya loves sharpener", "apple is a very healthy fruit", "this is great thanks very much"]
 let max = -Infinity;
let obj = {}
for(let i=0;i<sentences.length;i++){
  let sent = sentences[i].split('')
  let sent_length = sent.length;
  
}
// code is not working