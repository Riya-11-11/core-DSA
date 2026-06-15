// Challenge

// Now make the output:

// 1
// 2
// 3
// 4
// 5

// using recursion only.

function printNumbs(n) {
  if (n === 0) {
    return;
  }

  printNumbs(n - 1);
  console.log(n);
}

printNumbs(5);
