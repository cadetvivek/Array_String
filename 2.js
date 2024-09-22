// An integer Arrays nums is provided and a target is provided. Return True if any element has occurred more than Target times else return False.
// Solve it in 0(n) Time Complexity 
// Example 1:-
// Input:-
// Arr - [9,5,3, 2,1,5,1,4,3,5,4,6,5]
// Target - 3
// Output:-
// True
let arr =  [9,5,3, 2,1,5,1,4,3,5,4,6,5],Target=3;
let obj = {};
for(let i=0;i<arr.length;i++){
  if(obj[arr[i]]===undefined){
    //Check if the current element is not present as a key in numcount (undefined):
    obj[arr[i]]=1
    //If the element is not present, set its count in numcount to 1:
  }else{
    obj[arr[i]]++
  }
  if(obj[arr[i]]>Target){
  console.log('true')
}

}console.log('false')
