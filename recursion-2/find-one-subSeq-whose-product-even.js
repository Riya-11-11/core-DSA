// arr = [1, 2, 3]

// Possible Output:
// [2]

// or
// [1,2]

// or
// [2,3]

// or
// [1,2,3]

// Any one valid answer is fine.

let arr = [1, 2, 3];
let ans = [];

function subSeq(arr, ans, product, i) {
  if (i === arr.length) {
    if (product % 2 === 0) {
      console.log(ans);
      return true;
    }
    return;
  }

  //include
  ans.push(arr[i]);
  if (subSeq(arr, ans, product * arr[i], i + 1)) {
    return true;
  }

  //backtrack
  ans.pop();

  //exclude
  if (subSeq(arr, ans, product, i + 1)) {
    return true;
  }

  return false;
}

subSeq(arr, ans, 1, 0);
