// Given two strings:
// let s = "ab#c";
// let t = "ad#c";

// '#' means backspace

// Process strings:
// "ab#c"
// → "ac"

// "ad#c"
// → "ac"

// Compare

// Answer:
// true

let s = "ab#c";
let t = "ad#c";

let p1 = s.length - 1;
let p2 = t.length - 1;

let skipS = 0;
let skipT = 0;


while (p1 >= 0 || p2 >= 0) {

  while (p1>=0) {
    if (s[p1]==="#") {
      skipS++;
      p1--;
    }else if (skipS>0) {
      skipS--;
      p1--;
    }else{
      break;
    }
  }

  while (p2>=0) {
    if (t[p2]==="#") {
      skipT++;
      p2--;
    }else if (skipT>0) {
      skipT--;
      p2--;
    }else{
      break;
    }
  }

  if (s[p1]!==t[p2]) {
    console.log(false);
    return;
  }
  
  p1--;
  p2--;
}

console.log(true);
