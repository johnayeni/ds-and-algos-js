class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  /**
   * @param {number} val
   */
  push(val) {
    this.stack.push(val);

    if (
      !this.minStack.length ||
      this.minStack[this.minStack.length - 1][0] > val
    ) {
      this.minStack.push([val, 1]);
    } else if (this.minStack[this.minStack.length - 1][0] === val) {
      this.minStack[this.minStack.length - 1][1] += 1;
    }
  }

  /**
   * @return {void}
   */
  pop() {
    const val = this.stack.pop();

    if (this.minStack[this.minStack.length - 1][0] === val) {
      this.minStack[this.minStack.length - 1][1] -= 1;
    }

    if (this.minStack[this.minStack.length - 1][1] === 0) {
      this.minStack.pop();
    }
  }

  /**
   * @return {number}
   */
  top() {
    if (this.stack.length) {
      return this.stack[this.stack.length - 1];
    }

    return -1;
  }

  /**
   * @return {number}
   */
  getMin() {
    if (this.minStack.length) {
      return this.minStack[this.minStack.length - 1][0];
    }

    return -1;
  }
}
