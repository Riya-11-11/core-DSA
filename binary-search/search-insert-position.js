// Given sorted array:
// let nums = [1,3,5,6];
// let target = 5;

// Output:
// 2

let nums = [1,3,5,6];
let target = 5;

let left = 0;
let right = nums.length-1;
let mid = Math.floor((left+right)/2);

let ans = -1;

while (left<=right) {
    if (target===nums[mid]) {
        ans = mid;
        break;
    }else if(target>nums[mid]){
        left = mid+1;
        mid = Math.floor((left+right)/2);
    }else{
        right = mid-1;
        mid = Math.floor((left+right)/2);
    }
}

console.log(ans);
