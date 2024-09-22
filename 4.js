function checkBasket(N,B){
    // write code here
    let obj = {};
    for(let i=0;i<N;i++){
        if(obj[B[i]]==undefined){
          obj[B[i]]=1
        }else{
          obj[B[i]]++
        }
    }
    let max = -Infinity;
    for(let key in obj){
        if(obj[key]>max){
           max = obj[key]
        }
    }
  if(max==N){
    console.log("Yes")
  }else{
    console.log("No")
  }
}
checkBasket(3,['banana','banana','banana'])