// Print all subsequences whose sum equals K

// Example:
// arr = [1,2,1]
// k = 2

// Output:
// [1,1]
// [2]

let arr = [1, 2, 1];
let k = 2;

let ans = [];

function subSeq(arr, ans, sum, i) {
  if (i === arr.length) {
    if (sum === k) {
      console.log(ans);
    }
    return;
  }

  //including-part
  ans.push(arr[i]);
  subSeq(arr, ans, sum + arr[i], i + 1); //running sum

  //backtracking
  ans.pop();

  //excluding-part
  subSeq(arr, ans, sum, i + 1);
}

subSeq(arr, ans, 0, 0);
