// Find the Largest Digit in a Number

// Input:
// n = 52794

// Output:
// 9

// Because:

// Digits are:
// 5, 2, 7, 9, 4

// Largest = 9

function largestDigit(n) {
  if (n < 10) {
    return n;
  }

  let lastDigit = n % 10;
  return Math.max(lastDigit, largestDigit(Math.floor(n / 10)));
}

console.log(largestDigit(52724));
