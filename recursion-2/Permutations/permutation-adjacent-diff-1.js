// Print Only Permutations Where Adjacent Difference is 1

// Input:
// arr = [1,2,3]

// Output:
// 123
// 321

// Because:
// |1-2| = 1
// |2-3| = 1

// and
// |3-2| = 1
// |2-1| = 1

// Not:
// 132

// because:
// |1-3| = 2

// Hint: Check the condition only at the base case.

let arr = [1, 2, 3];
let path = [];
let visited = [false, false, false];

function permutationWithDiffOne() {
  if (path.length === arr.length) {
    for (let j = 0; j < path.length - 1; j++) {
      let diff = path[j] - path[j + 1];
      if (Math.abs(diff) !== 1) {
        return;
      }
    }
    console.log(path);
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (!visited[i]) {
      visited[i] = true;
      path.push(arr[i]);

      permutationWithDiffOne();

      //backtrack
      path.pop();
      visited[i] = false;
    }
  }
}

permutationWithDiffOne();
