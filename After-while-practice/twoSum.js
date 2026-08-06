// nums = [2,7,11,15]
// target = 9

let nums = [2, 7, 11, 15];
let target = 9;
let res = [];

for (let i = 0; i < nums.length; i++) {
  for (let j = i; j < nums.length; j++) {
    let num1 = nums[i];
    let num2 = nums[j];
    if (num1 + num2 === target) {
        res.push(i,j);
    }
  }
}

console.log(res);
