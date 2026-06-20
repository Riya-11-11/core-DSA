// Print Only Subsequences of Length 2

// Input:
// str = "abc"

// Output:
// ab
// ac
// bc

// Not:
// abc
// a
// b
// c
// ""

// Only subsequences whose length is exactly 2.

let str = "abc";
let ans = [];

function subSeq(str, ans, i) {
  if (i === str.length) {
    if (ans.length === 2) {
      console.log(ans);
    }
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
