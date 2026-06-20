let arr = [1, 2, 2];
let ans = [];
let allSubset = [];

arr.sort((a, b) => a - b);

function printSubset(arr, ans, allSubset, i) {
  if (i === arr.length) {
    allSubset.push([...ans]);
    return;
  }

  //including-part...
  ans.push(arr[i]);
  printSubset(arr, ans, allSubset, i + 1);

  //backtracking...
  ans.pop();

  //skipping...
  let idx = i + 1;
  while (idx < arr.length && arr[idx] === arr[idx - 1]) {
    idx = idx + 1;
  }

  //exluding-part...
  printSubset(arr, ans, allSubset, idx);
}

printSubset(arr, ans, allSubset, 0);
console.log(allSubset);

// node subsets2-no-duplicates.js
