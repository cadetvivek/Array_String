// You are given the following details:

// An array of products is given.
// An array of prices is given for the products in the products array.
// An array of quantities is given for the products in the products array.
// You are required to create a HashMap where you store the product name as the key and the total price of the product as the product of price and quantity.

// In the end, you need to print all the key-value pairs in a new line.
//   Sample Input 1
//   3
//   Apple Banana Orange
//   2.5 1.2 1.0
//   5 3 4

//   Sample Output 1
//   Apple - 12.50
//   Orange - 4.00
//   Banana - 3.60


function productTotalPrice(product,price,quantity){
  //write code here
  let obj = {};
  for(let i=0;i<product.length;i++){
    if(obj[product[i]]===undefined){
      obj[product[i]=price[i]*quantity[i]
     
    
    }
     console.log(product[i]+'-'+obj[product[i])
  }
 
  

}
productTotalPrice([ 'Apple', 'Banana', 'Orange' ],[ 2.5, 1.2, 1.0 ],[5,4,5])