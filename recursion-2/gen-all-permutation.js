// Generate All Permutations

// Input:
// arr = [1, 2, 3]

// Output:
// 123
// 132
// 213
// 231
// 312
// 321

// Notice:
// In subsequences we asked:
// Include or Exclude?

// In permutations we ask:
// Which unused element should I pick next?
// This is a completely different style of backtracking.
// You'll learn a new idea:

// Visited array
// or
// Swap technique

// We'll start with the visited-array approach because it's easier to understand.

let arr = [1, 2, 3];
let path = []; // current permutation being build
let visited = []; /// tells which elements are already used
let result = [];

function genAllPermutation() {
  if (path.length === arr.length) {
    result.push([...path]); //pushing copy not reference
    return;
  }

  for (let j = 0; j < arr.length; j++) {
    if (!visited[j]) {
      let elem = arr[j]; //select the number which is not visited
      visited[j] = true;
      path.push(elem);

      genAllPermutation();

      //backtrack
      path.pop();
      visited[j] = false;
    }
  }
}

genAllPermutation();
console.log(result);
