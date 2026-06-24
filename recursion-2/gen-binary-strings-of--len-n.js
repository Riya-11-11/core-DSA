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

function genBin(ans, i) {
  if (ans.length === n) {
    console.log(ans);
    return;
  }

  //include choose 0
  ans.push(0);
  genBin(ans, i + 1);

  //backtrack
  ans.pop();

  //include choose 1
  ans.push(1);
  genBin(ans, i + 1);

  //backtrack
  ans.pop();
}

genBin(ans, 0);
