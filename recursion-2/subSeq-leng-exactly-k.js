// Print Subsequences Whose Length is Exactly K

// Input:
// str = "abcd"
// k = 3

// Output:
// abc
// abd
// acd
// bcd

// Notice:
// Length is not fixed at 2 anymore.

let str = "abcd";
let k = 3;

let ans = [];
function subSeq(str, ans, k, i) {
  if (i === str.length) {
    if (ans.length === k) {
      console.log(ans);
    }
    return;
  }

  //including-part
  ans.push(str[i]);
  subSeq(str, ans, k, i + 1);

  //backtracking
  ans.pop();

  //excluding-part
  subSeq(str, ans, k, i + 1);
}

subSeq(str, ans, k, 0);
