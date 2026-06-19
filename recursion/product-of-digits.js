// n = 234

// Output:
// 24

// Because:
// 2 × 3 × 4 = 24

function productDigits(n) {
  if (n < 10) {
    return n;
  }

  return (n % 10) * productDigits(Math.floor(n / 10));
}

console.log(productDigits(234));
