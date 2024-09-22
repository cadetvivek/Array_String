// n - 14
// r - 18
// u - 21
// p - 16
// u - 21
// l - 12

// Therefore, sum = 14 + 18 + 21 + 16 + 21 + 12 = 102, which is greater than the value stored in K = 45, hence the output is Yes
function mapCharAndCompare(N, str, K) {
  let sum = 0;
  let char = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < char.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (char[i] == str[j]) {
        sum += i + 1
      }
    }

  }

  if (sum > K) {
    console.log("Yes")
  } else {
    console.log("No")
  }

}
mapCharAndCompare(6, "nrupul", 45)
// 6
// nrupul
// 45