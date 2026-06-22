// Print ONLY ONE subsequence whose sum = K

// Input:
// arr = [1,2,1]
// k = 2

// Output:
// [1,1]

// or
// [2]

// Just print the first valid one found and stop the entire recursion.

let arr = [1, 2, 1];
let k = 2;

let ans = [];

function subSeq(arr, ans, sum, i) {
  if (i === arr.length) {
    if (sum === k) {
      console.log(ans);
      return true;
    }
    return;
  }

  //including
  ans.push(arr[i]);
  if (subSeq(arr, ans, sum + arr[i], i + 1)) {
    return true;
  }

  //backtracking
  ans.pop();

  //exclude
  if (subSeq(arr, ans, sum, i + 1)) {
    return true;
  }

  return false;
}

subSeq(arr, ans, 0, 0);
