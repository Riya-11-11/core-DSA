// let s = "abcabcbb";

// Find:
// length of the longest substring
// without repeating characters

// Examples:

// Substrings:
// "abc"   → valid → length 3
// "abca"  → invalid (a repeats)
// "bca"   → valid
// "abcbb" → invalid

// Longest valid substring:
// "abc"

// Answer:
// 3

let s = "abcabcbb";
let map = {};
let maxLen = 0;
let l = 0;

for (let r = 0; r < s.length; r++) {
  let ch = s[r];
  if (map[ch]) {
    map[ch]++;
  } else {
    map[ch] = 1;
  }

  while (map[ch] > 1) {
    let leftCh = s[l];
    map[leftCh]--;
    l++;

    if (map[leftCh] === 0) {
      delete map[leftCh];
    }
  }

  let length = r - l + 1;
  if (length > maxLen) {
    maxLen = length;
  }
}

console.log(maxLen);
