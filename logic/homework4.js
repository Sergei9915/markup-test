/* #1 */

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

/* -- #1.1 -- */

// const firstDelete = arr.shift();
// const lastDelete = arr.pop();

// for (let i = 0; i < arr.length; i++) {
//   console.log("#1", arr[i]);
// }

/* -- #1.2 -- */

for (let i = 0; i < arr.length; i++) {
  if (i >= 1 && i < arr.length - 1) {
    console.log("#1", arr[i]); // 2, 3, 4, 5, 6, 7
  }
}

/* #2 */

const arr2 = [1, 2, 3, 4, 5, 6, 7];
const arr3 = [5, 6, 7, 8];

for (let i = 0; i < arr2.length; i++) {
  if (i < arr2[2]) {
    arr3.push(arr2[i]);
  }
}

console.log("#2", arr3); // 5, 6, 7, 8, 1, 2, 3

/* #3 */

const arr4 = ["Mike", "Leo", "Dark", "Pink", "Gold"];

const updateArr4 = arr4.slice(1, 4);

for (let i = 0; i < updateArr4.length; i++) {
  let wordsArr = updateArr4[i].split("");
  for (j = 0; j < wordsArr.length; j++) {
    console.log("#3", wordsArr[j]);
  }
}

/* #4 */

const arr5 = [1, 2, 3, 4, 5, 6];

arr5.unshift(55); // add start
arr5.push(66); // add end

while (arr5.length > 0) {
  console.log("#4 Delete:", arr5.shift());
}

console.log("#4 result:", arr5);

/* #5 */

const arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 35];

let updateArr6 = [];

for (let i = 0; i < arr6.length; i++) {
  if (arr6[i] % 2 === 0) {
    updateArr6.push(arr6[i]);
  }
}

console.log("#5", updateArr6);

/* #6 */

const arr7 = ["MikeJordan", "LeoLeoLeo", "Yellow", "Pink", "Gold"];

arr7.pop();

for (let key of arr7) {
  console.log("#6", key.length);
}

/* #7 */

const arr8 = [1, 2, 3, 4];

const initialLength = arr8.length; // arr8.lenngth ↓

// we can't do it directly, it will be an endless loop ↓

for (let i = 0; i < initialLength; i++) {
  arr8.unshift(i + 3);
}

console.log("#7 Unshift array: ", arr8);
console.log("#7 Slice array, ", arr8.slice(1, 4)); // 5, 4, 3

/* #8 */

const arr9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const updateArr9 = arr9.slice(0, 5); // [1, 2, 3, 4, 5]

for (let i = updateArr9.length - 1; i >= 0; i--) {
  console.log("#8", updateArr9[i]);
}

// let result = updateArr9.reverse();
// console.log(result); // new school :) [5, 4, 3, 2, 1]

/* #9 */

const arr10 = [
  "Like",
  "Mike",
  "String",
  "Apple",
  "Car",
  "Bob",
  "smile",
  "cool",
];

let updateArr10 = [];

for (let words of arr10) {
  updateArr10.push(words.charAt(0));
}

console.log("#9", updateArr10);

//* let updateArr10 = ""; and updateArr10 += words.charAt(0); result = console.log(updateArr10.splice("")) --- #9.1

/* #10 */

const arr11 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = arr11.length; i > 0; i--) {
  const newArr = arr11.shift();

  for (let el of newArr) {
    console.log("#10", el);
  }
}
