// Count Valid Parentheses

// Instead of printing:
// (())
// ()()

// Return:
// 2

// n = 2
// Expected Output
// 2

let n = 2;

function countParantheses(openCount, closeCount) {
  if (openCount === n && closeCount === n) {
    return 1;
  }

  let count = 0;
  if (openCount < n) {
    count += countParantheses(openCount + 1, closeCount);
  }

  if (closeCount < openCount) {
    count += countParantheses(openCount, closeCount + 1);
  }
  return count;
}

console.log(countParantheses(0, 0));
