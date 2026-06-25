// Count Binary Strings of Length N Having Exactly K Ones

// Input:
// n = 3
// k = 2

// Output:
// 3

// because:
// 011
// 101
// 110

// are the only valid strings.

let n = 3;
let k = 2;

function countBin(len, oneCount) {
  if (len === n) {
    if (oneCount === k) {
      return 1;
    } else return 0;
  }

  //include choose 0

  return countBin(len + 1, oneCount ) + countBin(len + 1, oneCount + 1);
}

console.log(countBin(0, 0, 0));
