const MinStack = function () {
  this.stack = [];
  this.minStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);

  if (
    !this.minStack.length ||
    this.minStack[this.minStack.length - 1][0] > val
  ) {
    this.minStack.push([val, 1]);
  } else if (this.minStack[this.minStack.length - 1][0] === val) {
    this.minStack[this.minStack.length - 1][1] += 1;
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const val = this.stack.pop();

  if (this.minStack[this.minStack.length - 1][0] === val) {
    this.minStack[this.minStack.length - 1][1] -= 1;
  }

  if (this.minStack[this.minStack.length - 1][1] === 0) {
    this.minStack.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (this.stack.length) {
    return this.stack[this.stack.length - 1];
  }

  return -1;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  if (this.minStack.length) {
    return this.minStack[this.minStack.length - 1][0];
  }

  return -1;
};
