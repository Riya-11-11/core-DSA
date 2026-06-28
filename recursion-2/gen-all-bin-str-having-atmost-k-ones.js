// Input
// n = 4
// k = 2
// Output
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

// Notice:

// Allowed:
// 0 ones ✅
// 1 one  ✅
// 2 ones ✅

// Not Allowed:
// 1110 ❌
// 1101 ❌
// 1011 ❌
// 0111 ❌
// 1111 ❌

// because they contain more than 2 ones.

let n = 4;
let k = 2;
let ans = [];

function binStr(ans, oneCount) {
  if (ans.length === n) {
    if (oneCount > k) {
      return;
    }
    console.log(ans);
    return;
  }

  //include choose 0
  ans.push(0);
  binStr(ans, oneCount);

  //backtrack
  ans.pop();

  //include choose 1 atmost k
  ans.push(1);
  binStr(ans, oneCount + 1);

  //backtrack
  ans.pop();
}

binStr(ans, 0, 0);
