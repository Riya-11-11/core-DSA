// Print Permutations Where the First Element is Smaller Than the Last Element

// Input:
// arr = [1,2,3]

// Expected output:
// 123
// 132
// 213

// Not:
// 231
// 312
// 321

// because in those permutations:

// first >= last

let arr = [1, 2, 3];
let path = [];
let visited = [false, false, false];

let result = [];

function printPermutation() {
  if (path.length === arr.length) {
    if (path[0] < path[path.length - 1]) {
      result.push([...path]);
    }
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (!visited[i]) {
      visited[i] = true;
      path.push(arr[i]);

      printPermutation();

      //backtrack
      path.pop();
      visited[i] = false;
    }
  }
}

printPermutation();
console.log(result);
