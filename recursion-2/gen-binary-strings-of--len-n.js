// Input:
// n = 3

// Output:
// 000
// 001
// 010
// 011
// 100
// 101
// 110
// 111

let n = 3;
let ans = [];

function genBin(ans) {
  if (ans.length === n) {
    console.log(ans);
    return;
  }

  //include choose 0
  ans.push(0);
  genBin(ans);

  //backtrack
  ans.pop();

  //include choose 1
  ans.push(1);
  genBin(ans);

  //backtrack
  ans.pop();
}

genBin(ans);
