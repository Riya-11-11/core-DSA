// str = "abc"
// Output
// abc
// ab
// ac
// a
// bc
// b
// c
// ""

// (8 total subsequences)

// Notice:
// length = 3

// 2³ = 8 subsequences

// Same pattern as subsets!

let str = "abc";
let ans = [];

function subSeq(str, ans, i) {
  if (i === str.length) {
    console.log(ans);
    return;
  }

  //including-part
  ans.push(str[i]);
  subSeq(str, ans, i + 1);

  //backtracking
  ans.pop();

  //excluding-part
  subSeq(str, ans, i + 1);
}

subSeq(str, ans, 0);
