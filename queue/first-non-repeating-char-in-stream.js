// First Non-Repeating Character in a Stream

// Given:
// stream = "aabc"

// Process characters one by one.

// After reading:

// a  -> a
// aa -> -1
// aab -> b
// aabc -> b

// Output:
// ["a", "-1", "b", "b"]

let stream = "aabc";

let queue = [];
let map = {};
let ans = [];

for (let i = 0; i < stream.length; i++) {
  let ch = stream[i];

  if (map[ch]) {
    map[ch]++;
  } else {
    map[ch] = 1;
  }

  queue.push(ch);

  while (map[queue[0]] > 1) {
    queue.shift();
  }
  if (queue.length === 0) {
    ans[i] = -1;
  } else {
    ans[i] = queue[0];
  }
}

console.log(ans);
