// Take front element

// Add it to answer

// Generate:
// current + "0"
// current + "1"

// Push both back into queue

// Generate First N Binary Numbers

// Given a number n, generate the first n binary numbers in order

// Input:
// n = 5

// Output:
// ["1", "10", "11", "100", "101"]

let n = 5;

let queue = ["1"];
let ans = [];

for (let i = 0; i < n; i++) {
  let curr = queue.shift();

  ans.push(curr);

  let val1 = curr + "0";
  let val2 = curr + "1";

  queue.push(val1);
  queue.push(val2);
}

console.log(ans);
