// First Recursion Problem
// Print Numbers from N to 1

// Given:
// n = 5

// Output:
// 5
// 4
// 3
// 2
// 1

// Rules
// Use recursion only.
// No loops.

function printNumbs(n) {
  if (n === 1) {
    //base case
    console.log(1);
    return;
  }
  console.log(n);
  printNumbs(n - 1);
}

printNumbs(10);
