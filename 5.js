//Reverse Odds
function ReverseOdd(arr){
  let bag = ''
  for(let i=0;i<arr.length;i++){
    if(arr[i]%2===1){
      bag+=arr[i]
    }
  }
  let bag1 = '';
  for(let i=bag.length-1;i>=0;i--){
    bag1+=bag[i]+' '
  }
    console.log(bag1)
}

ReverseOdd(['38', '1', '67', '23', '31' ])