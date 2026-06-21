let arr = [1, 2, 3];
let ans = [];

function getPermutation(arr, ans, idx) {
  if (idx === arr.length) {
    ans.push([...arr]);
    return;
  }

  for (let i = idx; i < arr.length; i++) {
    //swapping
    [arr[i], arr[idx]] = [arr[idx], arr[i]];

    getPermutation(arr, ans, idx + 1);

    //re-swapping for backtracking
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }
}

getPermutation(arr, ans, 0);
console.log(ans);
