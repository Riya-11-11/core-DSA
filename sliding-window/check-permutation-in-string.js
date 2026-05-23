// let s1 = "ab";
// let s2 = "eidboaoo";

// Possible windows:
// "ei"
// "id"
// "db"
// "bo"
// "oa"
// ...

// No:

// "ab"
// or
// "ba"

// Answer:
// false

let s1 = "ab";
let s2 = "eidboaoo";
let map1 = {};
let map2 = {};
let l = 0;
let isPermutation = false;

for (let i = 0; i < s1.length; i++) {
  let ch = s1[i];
  if (map1[ch]) {
    map1[ch]++;
  } else {
    map1[ch] = 1;
  }
}

for (let r = 0; r < s2.length; r++) {
  let ch = s2[r];
  if (map2[ch]) {
    map2[ch]++;
  } else {
    map2[ch] = 1;
  }

  if (r - l + 1 > s1.length) {
    let leftCh = s2[l];
    map2[leftCh]--;
    l++;

    if (map2[leftCh] === 0) {
      delete map2[leftCh];
    }
  }

  if (r-l+1===s1.length) {
    if (Object.keys(map1).length === Object.keys(map2).length) {
    let same = true;

    for (let key in map1) {
      if (map1[key] !== map2[key]) {
        same = false;
      }
    }

    if (same) {
      isPermutation = true;
      break;
    }
  }
  }
}

console.log(isPermutation);
