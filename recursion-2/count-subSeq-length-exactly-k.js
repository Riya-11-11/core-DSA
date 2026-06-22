// Count subsequences whose length is exactly K

// Input:
// arr = [1,2,3]
// k = 2

// Output:
// 3

// Because:

// [1,2]
// [1,3]
// [2,3]

// There are 3 subsequences of length 2.

let arr = [1, 2, 3];
let k = 2;

function countSubseq(arr, len, i) {
  if (i === arr.length) {
    if (len === k) {
      return 1;
    } else return 0;
  }

  return countSubseq(arr, len + 1, i + 1) + countSubseq(arr, len, i + 1);
}

console.log(countSubseq(arr, 0, 0));
