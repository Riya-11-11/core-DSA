// Print Only Permutations Starting With 1

// Input:
// arr = [1,2,3]

// Output:
// 123
// 132

// Only those beginning with 1.

// Hint:
// At the base case, check:

// path[0] === 1

let arr = [1, 2, 3];
let path = [];
let visited = [false, false, false];

let result = [];

function permutationWithOne() {
  if (path.length === arr.length) {
    if (path[0] === 1) {
      result.push([...path]);
    }
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (!visited[i]) {
      visited[i] = true;
      path.push(arr[i]);

      permutationWithOne();

      //backtrack
      path.pop();
      visited[i] = false;
    }
  }
}

permutationWithOne();
console.log(result);
