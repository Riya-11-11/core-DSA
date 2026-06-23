// Print All Subsequences Whose Length ≤ K

// Input:
// str = "abc";
// k = 2;

// Output:
// ""
// a
// b
// c
// ab
// ac
// bc

// Not:
// abc

// because its length is 3.

let str = "abc";
let k = 2;

let ans = [];

function printSubseq(str, ans, i) {
  if (ans.length > k) {
    return 0;
  }

  if (i === str.length) {
    return console.log(ans);
  } //PRUNING

  //involve
  ans.push(str[i]);
  printSubseq(str, ans, i + 1);

  //backtrack
  ans.pop();

  //exclude
  printSubseq(str, ans, i + 1);
}

printSubseq(str, ans, 0);
