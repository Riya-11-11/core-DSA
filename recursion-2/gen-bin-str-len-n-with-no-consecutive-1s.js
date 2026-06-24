// Input:
// n = 3

// Output:
// 000
// 001
// 010
// 100
// 101

// Not:
// 011
// 110
// 111

// because they contain:

// 11

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

  //exclude choose 1 with no consecutive 1s
  if (ans[ans.length - 1] !== 1) {
    ans.push(1);
    genBin(ans);

    //backtrack
    ans.pop();
  }
}

genBin(ans);
