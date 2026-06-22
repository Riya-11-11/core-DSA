// Count Subsequences Whose Sum = K

// Input:
// arr = [1,2,1]
// k = 2

// Output:
// 2

// Because:
// [1,1]
// [2]

// are valid.

let arr = [1, 2, 1];
let k = 2;

function countSubseq(arr, sum, i) {
  if (i === arr.length) {
    if (sum === k) {
      return 1;
    } else return 0;
  }
  //count = include +exclue
  return countSubseq(arr, sum + arr[i], i + 1) + countSubseq(arr, sum, i + 1);
}

console.log(countSubseq(arr, 0, 0));
