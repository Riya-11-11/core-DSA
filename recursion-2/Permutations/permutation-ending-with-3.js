// Print Only Permutations Ending With 3

// Output:
// 123
// 213

// Hint:
// path[path.length - 1] === 3

let arr = [1, 2, 3];
let path = [];
let visited = [false, false, false];

let result = [];

function permutatioEndingThree() {
  if (path.length === arr.length) {
    if (path[path.length - 1] === 3) {
      result.push([...path]);
    }
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (!visited[i]) {
      visited[i] = true;
      path.push(arr[i]);

      permutatioEndingThree();

      //backtrack
      path.pop();
      visited[i] = false;
    }
  }
}

permutatioEndingThree();
console.log(result);
