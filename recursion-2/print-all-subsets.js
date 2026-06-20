// arr = [1,2]

// For element 1:

// Include 1
// Exclude 1

// Then for element 2:

// Include 2
// Exclude 2

// Result:
// []
// [1]
// [2]
// [1,2]

let arr = [1, 2, 3];
let ans = [];

function printSubset(arr, ans, i) {
  if (i === arr.length) {
    console.log(ans);
    return;
  }

  //including part
  ans.push(arr[i]);
  printSubset(arr, ans, i + 1);

  //backtracking
  ans.pop();

  //excluding-part
  printSubset(arr, ans, i + 1);
}

printSubset(arr, ans, 0);
