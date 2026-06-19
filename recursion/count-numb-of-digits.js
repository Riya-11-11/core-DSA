// Count the Number of Digits

// Input:
// n = 12345

// Output:
// 5

// Input:
// n = 7

// Output:
// 1

function countDigits(n) {
  if (n === 1) {
    return 1;
  }
  return 1 + countDigits(Math.floor(n / 10));
}

console.log(countDigits(12345));
