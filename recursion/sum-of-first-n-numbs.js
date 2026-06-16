// Sum of First N Numbers

// Input:
// n = 5

// Output:
// 15

// because:
// 1 + 2 + 3 + 4 + 5 = 15

function sum(n) {
  if (n === 1) {
    return 1;
  }

  return n + sum(n - 1);
}

console.log(sum(5));
