// You are given an integer array arr. Sort the integers in the array in ascending order by the number of 1's in their binary representation and in case of two or more integers have the same number of 1's you have to sort them in ascending order.

// Return the array after sorting it.

 

// Example 1:

// Input: arr = [0,1,2,3,4,5,6,7,8]

// Output: [0,1,2,4,8,3,5,6,7]

// Explantion: [0] is the only integer with 0 bits.

// [1,2,4,8] all have 1 bit.

// [3,5,6] have 2 bits.

// [7] has 3 bits.

// The sorted array by bits is [0,1,2,4,8,3,5,6,7]
let sortBite = function(arr){
function BitsCount(n){
  //let arr = [0,1,2,3,4,5,6,7,8];
let count =0;

while(n>0){
  count+=n&1;
  n>>=1;
}return count
};

arr.sort((a,b)=>{
  let countA = BitsCount(a)
  let countB = BitsCount(b)
if(countA!==countB){
  return countA-countB
}else{
  return a-b
}
})
  console.log(arr)
}
sortBite(0,1,2,3,4,5,6,7,8)