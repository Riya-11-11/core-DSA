// Print Only Even-Sum Prefix Permutations

// Input:
// arr = [1,2,3]

// A permutation is printed only if the first two numbers have an even sum.

// Examples:
// 132 ✅
// 231 ❌

// because:
// 1+3 = 4
// 2+3 = 5 ❌

// You'll need to think carefully before deciding exactly what to check.

let arr = [1, 2, 3];
let path = [];
let visited = [false, false, false];

let result = [];

function evenSumPrefix() {
  if (path.length === arr.length) {
    result.push([...path]);
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (!visited[i]) {
      visited[i] = true;
      path.push(arr[i]);

      if (path.length === 2) {
        if ((path[0] + path[1]) % 2 !== 0) {
          path.pop();
          visited[i] = false;
          continue;
        }
      }

      evenSumPrefix();

      //backtrack
      path.pop();
      visited[i] = false;
    }
  }
}

evenSumPrefix();
console.log(result);
