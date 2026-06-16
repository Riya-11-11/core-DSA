// Count Down and Return Count

// Input:
// n = 5

// Output:
// 5
// 4
// 3
// 2
// 1

// Count = 5

// Requirements:
// Print the numbers from N to 1.
// Return how many numbers were printed.
// No loops.

let count;

function countDown(n) {
  if (n === 0) {
    return 0;
  }

  console.log(n);
  return (count = 1 + countDown(n - 1));
}

countDown(5);
console.log("count: ", count);
