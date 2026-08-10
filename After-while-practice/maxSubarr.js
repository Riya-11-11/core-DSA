// Since tum already Map/Hashing ke 2 questions kar chuki ho, ab pattern change karte hain.

// 🟢 Question 3 — Maximum Subarray

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let maxSum = 0;
let currSum = 0;

for (let i = 0; i < nums.length; i++) {
  let curr = nums[i];
  if (currSum + curr > curr) {
    currSum += curr;
  } else {
    currSum = curr;
  }
  if (currSum > maxSum) {
    maxSum = currSum;
  }
}

console.log(maxSum);

// Tumhe integers ka array diya hai. Tumhe contiguous subarray ka maximum possible sum find karna hai.

// Example 1
// nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

// Output:
// 6

// Because:
// [4, -1, 2, 1]

// // ka sum:
// // 4 + (-1) + 2 + 1 = 6

// Tumhe abhi bas ye rule discover karna hai 👇

// Har element par do possibilities:

// 1. Current subarray ko continue karun
//        ↓
//    currentSum + nums[i]

// 2. Naya subarray isi element se start karun
//        ↓
//    nums[i]

// To har step par compare karo:

// currentSum + nums[i]
//             VS
//           nums[i]

// Jo bada hai, woh current sum banega.

// Aur saath mein ek aur variable rakhna padega:

// Ab tak ka maximum sum kya hai?
