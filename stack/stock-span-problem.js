let price = [100, 80, 60, 70, 60, 75, 85];

let ans = [];
let stack = []; //push index ...store previous value
//previous high value tak jaana h

// top = stack[stack.length-1]

for (let i = 0; i < price.length; i++) {
  while (stack.length > 0 && price[stack[stack.length - 1]] <= price[i]) {
    //price[stack[stack.length - 1]]---> because we were storing idx not value so we will find val and then compare
    stack.pop();
  } // removing <= value from our stack

  if (stack.length === 0) {
    ans[i] = i + 1;
  } else {
    ans[i] = i - stack[stack.length - 1];
  }
  stack.push(i);
}

console.log(ans);
