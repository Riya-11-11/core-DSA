// n = 3

// Ways:
// 1+1+1

// 1+2

// 2+1

// 3

// Output:
// 4

// So the base cases are:

// ways(0) = 1
// ways(1) = 1
// ways(2) = 2

function ways(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  if (n === 2) {
    return n;
  }

  return ways(n - 1) + ways(n - 2) + ways(n - 3);
}

console.log(ways(3));
