// Input:
// n = 3
// k = 2

// Output:
// 011
// 101
// 110

// Not:
// 000
// 001
// 010
// 100
// 111

// because they don't contain exactly 2 ones.

let n = 3;
let k = 2;
let ans = [];

function genBin(ans, oneCount) {
  if (ans.length === n) {
    if (oneCount > k) {
      console.log(ans);
    }
    return;
  }

  //include choose 0;
  ans.push(0);
  genBin(ans, oneCount);

  //backtrack
  ans.pop();

  //include choose 1
  ans.push(1);
  genBin(ans, oneCount + 1);

  //backtrack
  ans.pop();
}

genBin(ans, 0);
