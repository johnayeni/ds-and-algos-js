/**
 * Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.

Implement the MovingAverage class:

MovingAverage(int size) Initializes the object with the size of the window size.
double next(int val) Returns the moving average of the last size values of the stream.
 */
/**
 * @param {number} size
 */
const MovingAverage = function (k) {
  this.size = k;
  this.queue = [];
  this.sum = 0;
};

/**
 * Time complexity O(1)
 * Space complexity O(K)
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
  if (this.queue.length === this.size) {
    const n = this.queue.shift();
    this.sum -= n;
  }

  this.queue.push(val);
  this.sum += val;

  return this.sum / this.queue.length;
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
