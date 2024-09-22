//Maximum Occurring Element
let A = [ 0, 2, 0, 6, 9 ]
let obj = {};
for(let i=0;i<A.length;i++){
  if(obj[A[i]]==undefined){
    obj[A[i]]=1
  }else{
    obj[A[i]]++
  }
}
let max = -Infinity;
let ans;
for(let key in obj){
  if(obj[key]>max){
    max = obj[key]
    ans = key
    
  }
}
console.log(ans)

//0