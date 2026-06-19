// Input
// n = 3
// Output
// 3

// Because there are 3 ways:
// 1 + 1 + 1
// 1 + 2
// 2 + 1

// Quick Check

// For:
// n = 3

// Using:
// ways(3)
// =
// ways(2)
// +
// ways(1)

// If:

// ways(2) = 2
// ways(1) = 1

// Then:

// ways(3) = 3

// which matches the example.

// ways(4)
// =
// ways(3) + ways(2)
// =
// 3 + 2
// =
// 5

function climbStairs(n) {
  if (n === 1 || n === 2) {
    return n;
  }

  return climbStairs(n - 1) + climbStairs(n - 2);
}

console.log(climbStairs(4));
