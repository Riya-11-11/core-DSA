// Given array:
// let arr = [0,3,2,1];

// Return true if array forms a mountain

// Mountain means:
// strictly increasing
// then
// strictly decreasing

// Valid:
// [0,3,2,1] → true

// Invalid:
// [3,5,5] → false
// equal values not allowed

// [0,1,2,3] → false
// only increasing

// [3,2,1] → false
// only decreasing

// climb while increasing
// ↓
// reach peak
// ↓
// go down while decreasing

let arr = [0, 3, 2, 1];
let i = 0;

while (arr[i] < arr[i + 1]) {
  i++;
}

if (i === 0 || i === arr.length - 1) {
  console.log(false);
  return;
}

while (arr[i] > arr[i + 1]) {
  i++;
}

if (i === arr.length - 1) {
  console.log(true);
  return;
} else console.log(false);
