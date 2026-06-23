// Count Subsequences Whose Length ≤ K

// Input:
// str = "abc";
// k = 2;

// Output:
// 7

// Because:
// ""
// a
// b
// c
// ab
// ac
// bc

// There are 7 of them.

let str = "abc";
let k = 2;

function countSubseq(str, len, i) {
  if (len > k) {
    return 0;
  }

  if (i === str.length) {
    return 1;
  }

  return countSubseq(str, len + 1, i + 1) + countSubseq(str, len, i + 1);
}

console.log(countSubseq(str, 0, 0));
