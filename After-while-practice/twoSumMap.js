// current number
//       ↓
// target - current
//       ↓
// "ye number pehle dekha hai?"
//       ↓
//    YES → answer
//    NO  → current number ko Map mein store karo

let nums = [2, 7, 11, 15];
let target = 9;
let ans = [];

let map = new Map(); // memory to store value

for (let i = 0; i < nums.length; i++) {
  let curr = nums[i];
  let val = target - curr;
  if (map.has(val)) {
    ans.push(map.get(val), i);
  } else {
    map.set(curr, i);
  }
}

console.log(ans);
