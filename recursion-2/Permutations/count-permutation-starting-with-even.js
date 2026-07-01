// Count Permutations Starting With an Even Number

// Input:
// arr = [1,2,3]

// Output:
// 2

// Because:
// 213
// 231

// are the only ones starting with an even number.

// Return the count.

let arr = [1, 2, 3];
let visited = [false, false, false];
let path = [];

function countStartingEven() {
  if (path.length === arr.length) {
    if (path[0] % 2 !== 0) {
      return 0;
    }
    return 1;
  }

  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (!visited[i]) {
      visited[i] = true;
      path.push(arr[i]);

      count += countStartingEven();

      //backtrack
      path.pop();
      visited[i] = false;
    }
  }
  return count;
}

console.log(countStartingEven());
