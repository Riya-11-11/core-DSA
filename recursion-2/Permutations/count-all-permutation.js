// Count All Permutations

// Instead of printing:
// 123
// 132
// 213
// ...

// Return only the count.

// Input:
// arr = [1,2,3]

// Output
// 6

// Don't use result.
// Just return the count recursively.

let arr = [1, 2, 3];
let visited = [false, false, false];

function countPermutation(len) {
  if (len === arr.length) {
    return 1;
  }

  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (!visited[i]) {
      visited[i] = true;

      count += countPermutation(len + 1);

      visited[i] = false;
    }
  }
  return count;
}

console.log(countPermutation(0));
