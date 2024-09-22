// Description

const { isPrimitive } = require("util");

// You are given an array of n positive integers. Your task is to find the sum of the number whose frequency is prime

// Sample Input 1
// 7 4 0 4 8 7 7
// Sample Output 1
// 11
// Hint

// Sample 1 Explanation
// frequency of 7 in array =>3times
// frequency of 4 in array =>2times
// frequency of 0 in array =>1time
// frequency of 8 in array =>1time
// 4and7have a prime frequency that is 2 and 3
// Sum of element having prime frequency = 4 + 7 = 11
// 11 is the required output
function PrimeFrequency(N, A) {
    //write code here
  function isPrime(num) {
      if (num <= 1) return false;
      for (let i = 2; i * i <= num; i++) {
          if (num % i === 0) return false;
      }
      return true;
  }
    let obj = {};
    let sum = 0;
    for (let i = 0; i < N; i++){
        if (obj[A[i]] === undefined){
            obj[A[i]] = 1;
        }else{
           obj[A[i]]++
        }
    }
  
    for (let key in obj){
        if (isPrime(obj[key])){
            sum += Number(key)
        }
    }
  
    
  console.log(sum)
}



PrimeFrequency(7, [4, 0, 4, 8, 7, 7])