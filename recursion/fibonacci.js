// The Fibonacci sequence is:
// 0, 1, 1, 2, 3, 5, 8, 13, 21...

// Rule:
// fib(n) = fib(n-1) + fib(n-2)

// Examples:

// fib(0) = 0
// fib(1) = 1
// fib(2) = 1
// fib(3) = 2
// fib(4) = 3
// fib(5) = 5
// fib(6) = 8

// Input
// n = 6
// Output
// 8

function fib(n) {
  if (n === 0 || n === 1) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

console.log(fib(6));
