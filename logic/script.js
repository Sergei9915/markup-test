/* LeetCode-solutions */

/* 2704. To Be Or Not To Be */

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

expect(5).toBe(2); // Not Equal
expect(5).notToBe(10); // true
