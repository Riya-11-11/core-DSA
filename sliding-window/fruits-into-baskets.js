// Fruits Into Baskets
// Input:
// let fruits = ["A","B","C","A","C"];
// Rule:
// You have 2 baskets.
// Each basket can hold only 1 type of fruit.

// Find:
// maximum number of fruits collected continuously

// Example:
// ["C","A","C"]
// contains:
// C and A
// Only 2 types → valid.
// Length:
// 3

let f = ["A", "B", "C", "A", "C"];
let b = 2;
let map = {};
let maxLength = 0;
let l = 0;

for (let r = 0; r < f.length; r++) {
  let ch = f[r];
  if (map[ch]) {
    map[ch]++;
  } else {
    map[ch] = 1;
  }

  while (Object.keys(map).length > b) {
    let leftCh = f[l];
    map[leftCh]--;
    l++;

    if (map[leftCh] === 0) {
      delete map[leftCh];
    }
  }

  let length = r - l + 1;
  if (length > maxLength) {
    maxLength = length;
  }
}

console.log(maxLength);
