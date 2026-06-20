let arr = [1, 2, 3];
let ans = [];
let allSubset = [];

function printSubset(arr, ans, allSubset, i) {
  if (i === arr.length) {
    allSubset.push([...ans]); // store copy of ans
    return;
  }

  //including
  ans.push(arr[i]);
  printSubset(arr, ans, allSubset, i + 1);

  //backtracking
  ans.pop();

  //excluding
  printSubset(arr, ans, allSubset, i + 1);
}

printSubset(arr, ans, allSubset, 0);
console.log(allSubset);
