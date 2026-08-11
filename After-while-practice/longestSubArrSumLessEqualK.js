// nums = [2, 1, 5, 1, 3, 2]
// k = 7

// Possible subarrays:
// [2, 1, 5]       → sum = 8 ❌
// [1, 5, 1]       → sum = 7 ✅ length = 3
// [5, 1, 3]       → sum = 9 ❌
// [1, 3, 2]       → sum = 6 ✅ length = 3

// There may be other smaller valid subarrays, but the maximum length here is:
// 3

// So output:
// 3

// Rule:
// Sum ≤ K → window expand karo.
// Sum > K → left se elements remove karke window shrink karo.

let nums = [2, 1, 5, 1, 3, 2];
let k = 7;

let left = 0;
let windowSum = 0;
let maxLength = 1;

for (let right = 0; right < nums.length; right++) {
  windowSum += nums[right];
  while (windowSum > k) {
    windowSum -= nums[left];
    left++;
  }
  let windowLen = right - left + 1;
  if (windowLen > maxLength) {
    maxLength = windowLen;
  }
}

console.log(maxLength);
