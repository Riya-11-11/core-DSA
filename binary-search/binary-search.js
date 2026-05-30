// Given sorted array:
// let nums = [-1,0,3,5,9,12];
// let target = 9;

// Return index of target

// Output:
// 4

// If target doesn't exist:
// return -1

let nums = [-1,0,3,5,9,12];
let target = 9;

let left = 0;
let right = nums.length-1;
let mid = Math.floor((left+right)/2);

let ans = -1;

while (left<=right) {
    if (target===nums[mid]) {
        ans = mid;
        break;  
    }else if (target>nums[mid]) {
        left = mid+1;
        mid = Math.floor((left+right)/2);
    }else if (target<nums[mid]) {
        right = mid-1;
        mid = Math.floor((left+right)/2);
    }
}

console.log(ans);
