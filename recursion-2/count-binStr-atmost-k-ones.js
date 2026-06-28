// Challenge: Count Binary Strings of Length n Having At Most k Ones
// Input
// n = 4
// k = 2

// Output
// 11

// Because these are valid:
// 0000
// 0001
// 0010
// 0011
// 0100
// 0101
// 0110
// 1000
// 1001
// 1010
// 1100

// Total = 11

let n = 4;
let k = 2;

function countBinStr(oneCount, len) {
  if (oneCount > k) {
    return 0;
  }
  
  if (len === n) {
    return 1;
  }

  return countBinStr(oneCount, len + 1) + countBinStr(oneCount + 1, len + 1);
}

console.log(countBinStr(0, 0));
