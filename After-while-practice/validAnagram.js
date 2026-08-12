// Question 2 — Valid Anagram

// Anagram ka matlab
// Dono strings mein same characters same frequency mein hone chahiye, bas order different ho sakta hai.

// Example 1
// s = "anagram"
// t = "nagaram"

// Output:
// true

let s = "anagram";
let t = "nagaram";

let map = {};
let isAnagram = true;

if (s.length !== t.length) {
  isAnagram = false;
} else {
  for (let i = 0; i < s.length; i++) {
    let ch = s[i];

    if (map[ch]) {
      map[ch]++;
    } else {
      map[ch] = 1;
    }
  }

  for (let i = 0; i < t.length; i++) {
    let ch = t[i];
    if (map[ch]) {
      map[ch]--;
    } else {
      isAnagram = false;
      break;
    }
  }
}
console.log(isAnagram);
