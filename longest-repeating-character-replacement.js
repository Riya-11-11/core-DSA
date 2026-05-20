// Q2️⃣ Longest Repeating Character Replacement (Concept only)

// Don’t code yet.

// Just think:

// s = "AABABBA"
// k = 1

let s = "AABABBA";
let k = 1;
let maxLength = 0;
let map = {};
let l = 0;

for (let r = 0; r < s.length; r++) {
  let ch = s[r];
  if (map[ch]) {
    map[ch]++;
  } else {
    map[ch] = 1;
  }

  let maxFreq = Math.max(...Object.values(map));

  while (r - l + 1 - maxFreq > k) {
    let leftChar = s[l];
    map[leftChar]--;
    l++;

    if (map[leftChar] === 0) {
      delete map[leftChar];
    }
  }

  let length = r - l + 1;
  if (length > maxLength) {
    maxLength = length;
  }
}

console.log(maxLength);
