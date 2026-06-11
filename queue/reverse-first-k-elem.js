// queue = [10,20,30,40,50]
// k = 3

// [30,20,10,40,50]

let queue = [10, 20, 30, 40, 50];
let k = 3;

let stack = [];

for (let i = 0; i < k; i++) {
  let val = queue.shift();
  stack.push(val);
}

while (stack.length > 0) {
  let poppedVal = stack.pop();
  queue.push(poppedVal);
}

let remaining = queue.length - k;

for (let i = 0; i < remaining; i++) {
  let popped = queue.shift();
  queue.push(popped);
}

console.log(queue);
