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

let ans = [];
let count = 0;

function countSubseq(arr, ans, sum, i) {
  if (i === arr.length) {
    if (sum === k) {
      //   console.log(ans);
      count = count + 1;
    }
    return;
  }

  //include
  ans.push(arr[i]);
  countSubseq(arr, ans, sum + arr[i], i + 1);

  //backtracking
  ans.pop();

  //exclude
  countSubseq(arr, ans, sum, i + 1);
}

countSubseq(arr, ans, 0, 0);
console.log(count);
