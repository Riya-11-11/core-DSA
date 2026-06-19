// Sum of Digits Using Recursion

// Input:
// n = 1234

// Output:
// 10

// Because:
// 1 + 2 + 3 + 4 = 10

// Rules:
// No loops
// No string conversion
// Recursion only

function sumDigits(n) {
  if (n < 10) {
    return n;
  }

  return sumDigits(n % 10) + sumDigits(Math.floor(n / 10));
}

console.log(sumDigits(123));
