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

function plusOne1(n) {
  return n + 1; // [ 2, 3, 4 ]
}

function plusI(n, i) {
  return n + i; // [ 1, 3, 5 ]
}

function constant() {
  return 42; // [ 42, 42, 42 ]
}

// 2634. Filter Elements from Array

let filter = function (arr, fn) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      result.push(arr[i]);
    }
  }

  return result;
};

function greeterThan10(n) {
  return n > 10; // [ 20, 30 ]
}

function firstIndex(n, i) {
  return i === 0; // [ 1 ]
}

function plusOne2(n) {
  return n + 1; // [-2, 0, 1, 2]
}

// 2626. Array Reduce Transformation

let reduce = function (nums, fn, init) {
  let result = init;

  for (let i = 0; i < nums.length; i++) {
    result = fn(result, nums[i]);
  }

  return result;
};

function sum(accum, curr) {
  return accum + curr; // 10
}

function sum2(accum, curr) {
  return accum + curr * curr; // 130
}

function sum3(accum, curr) {
  return 0; // 25
}

// 2629. Function Composition

let compose = function (f) {
  return function (x) {
    let result = x;

    for (let i = f.length - 1; i >= 0; i--) {
      result = f[i](result);
    }

    return result;
  };
};

const fn = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x]);
const fn1 = compose([(x) => 10 * x, (x) => 10 * x, (x) => 10 * x]);
const fn2 = compose([]);

fn(4); // 65
fn1(1); // 1000
fn2(42); // 42

// 2703. Return Length of Arguments Passed

let argumentsLength = function (...args) {
  return args.length;
};

argumentsLength({}, null, "3");


