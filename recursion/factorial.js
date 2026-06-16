// Factorial

// Input:
// n = 5

// Output:
// 120

// Because:

// 5 × 4 × 3 × 2 × 1
// =
// 120

function factorial(n) {
  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(factorial(5));
