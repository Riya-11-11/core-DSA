// Print Permutations Whose Sum of First Two Elements is Odd

// Input:
// arr = [1,2,3]

// Possible output:
// 123
// 213
// 231
// 312

// Think carefully.

// The condition is:
// path[0] + path[1]

let arr = [1, 2, 3];
let path = [];
let visited = [false, false, false];

let result = [];

function permutationStartSumOdd() {
  if (path.length === arr.length) {
    result.push([...path]);
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (!visited[i]) {
      visited[i] = true;
      path.push(arr[i]);

      if (path.length === 2) {
        if ((path[0] + path[1]) % 2 === 0) {
          path.pop();
          visited[i] = false;
          continue;
        }
      }

      permutationStartSumOdd();

      //backtrack
      path.pop();
      visited[i] = false;
    }
  }
}

permutationStartSumOdd();
console.log(result);
