// Question — Find All Anagrams in a String

// let s = "abab";
// let p = "ab";

// Windows:

// "ab" → index 0
// "ba" → index 1
// "ab" → index 2

// Answer:

// [0,1,2]

let s = "abab";
let p = "ab";
let mapP = {};
let mapS = {};
let l = 0;
let ans = [];

for (let i = 0; i < p.length; i++) {
  let ch = p[i];
  if (mapP[ch]) {
    mapP[ch]++;
  } else {
    mapP[ch] = 1;
  }
}

for (let r = 0; r < s.length; r++) {
  let ch = s[r];
  if (mapS[ch]) {
    mapS[ch]++;
  } else {
    mapS[ch] = 1;
  }

  if (r - l + 1 > p.length) {
    let leftCh = s[l];
    mapS[leftCh]--;
    l++;

    if (mapS[leftCh] === 0) {
      delete mapS[leftCh];
    }
  }

  if (r - l + 1 === p.length) {
    if (Object.keys(mapP).length === Object.keys(mapS).length) {
      let isSame = true;

      for (let key in mapP) {
        if (mapP[key] !== mapS[key]) {
          isSame = false;
        }
      }
      if (isSame) {
        ans.push(l);
      }
    }
  }
}

console.log(ans);
