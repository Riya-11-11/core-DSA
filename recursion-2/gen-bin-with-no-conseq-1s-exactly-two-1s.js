// n = 3

// Generate binary strings with:

// No consecutive 1s
// AND
// Exactly 2 ones

// Output:
// 101

// Not:
// 110
// 011
// 111

// because they have consecutive 1s.

// Not:
// 001
// 010
// 100

// because they don't have exactly 2 ones.

let n = 3;
let ans = [];

function genBin(ans, onesCount) {
  if (ans.length === n) {
    if (onesCount === 2) {
      console.log(ans);
    }
    return;
  }

  //include choose 0
  ans.push(0);
  genBin(ans, onesCount);

  //backtrack
  ans.pop();

  //include choose 1
  if (ans[ans.length - 1] !== 1) {
    ans.push(1);
    genBin(ans, onesCount + 1);

    ans.pop();
  }
}

genBin(ans, 0);
