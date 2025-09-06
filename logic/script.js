/* LeetCode-solutions */

// 2704. To Be Or Not To Be

let expect = function (val) {
  return {
    toBe(valTwo) {
      let a = Boolean(val === valTwo);
      if (a === true) {
        return a;
      } else {
        throw new Error("Not Equal");
      }
    },

    notToBe(valThree) {
      let b = Boolean(val !== valThree);
      if (b === true) {
        return b;
      } else {
        throw new Error("Equal");
      }
    },
  };
};

// expect(5).toBe(2); // Not Equal
// expect(5).notToBe(10); // true

// 2665. Counter II

let createCounter = function (init) {
  let firstInit = init;

  return {
    increment() {
      return ++firstInit;
    },
    decrement() {
      return --firstInit;
    },
    reset() {
      firstInit = init;
      return firstInit;
    },
  };
};

const counter = createCounter(5);

counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4

// 2635. Apply Transform Over Each Element in Array

let map = function (arr, fn) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i));
  }

  return result;
};

function plusone(n) {
  return n + 1; // [ 2, 3, 4 ]
}

function plusI(n, i) {
  return n + i; // [ 1, 3, 5 ]
}

function constant() {
  return 42; // [ 42, 42, 42 ]
}
