// nums = [1,3,-1,-3,5,3,6,7]
// k = 3

// Output:
// [3,3,5,5,6,7]

// Meaning:

// [1,3,-1]  -> 3
// [3,-1,-3] -> 3
// [-1,-3,5] -> 5
// [-3,5,3]  -> 5
// [5,3,6]   -> 6
// [3,6,7]   -> 7

// popback;
// deque.pop();

// popFront
// deque.shift();

// pushFront
// deque.unshift();

// pushBack
// deque.push();

nums = [1, 3, -1, -3, 5, 3, 6, 7];
k = 3;

let deque = [];
let res = [];

// let back = deque[deque.length - 1];
// let front = deque[0];

for (let i = 0; i < k; i++) {
  while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
    deque.pop();
  }
  deque.push(i);
}

for (let i = k; i < nums.length; i++) {
  res.push(nums[deque[0]]);

  //removing elem which are not part of curr window

  while (deque.length > 0 && deque[0] <= i - k) {
    deque.shift();
  }

  //removing smaller val
  while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
    deque.pop();
  }
  deque.push(i);
}

res.push(nums[deque[0]]);

console.log(res);
