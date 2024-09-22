// You are given a string S. Your task is to write a program that comments if it has all unique character or not (no repeated character).

// If it has just unique character, output "UNIQUE"

// Else in all other cases, output "NO"

function checkUnique(arr){
  let obj = {};
  for(let i=0;i<arr.length;i++){
    if(obj[arr[i]]==undefined){
      obj[arr[i]]=1;
    }else{
      obj[arr[i]]++
    }
  }
  let count =0
  for(let key in obj){
     if(obj[key]>1){
       count++
     }
  }
  if(count>0){
    console.log('NO')
  }else{
    console.log('UNIQUE')
  }
}
checkUnique('MasAi')
checkUnique('masai')