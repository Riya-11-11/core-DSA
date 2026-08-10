// nums = [1, 2, 3, 1]

// 1 → pehli baar
// 2 → pehli baar
// 3 → pehli baar
// 1 → 🤔 already dekha hua hai!

let nums = [1, 2, 3, 1];
let isDuplicate = false;

let map = new Map();

for (let i = nums.length - 1; i >= 0; i--) {
  let elem = nums[i];
  if (map.has(elem)) {
    isDuplicate = true;
    break;
  } else {
    map.set(elem);
  }
}

console.log(isDuplicate);
