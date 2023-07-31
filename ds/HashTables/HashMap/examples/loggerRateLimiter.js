/**
 * Design a logger system that receives a stream of messages along with their timestamps. Each unique message should only be printed at most every 10 seconds (i.e. a message printed at timestamp t will prevent other identical messages from being printed until timestamp t + 10).
 * All messages will come in chronological order. Several messages may arrive at the same timestamp.
 * Logger() Initializes the logger object.
 * bool shouldPrintMessage(int timestamp, string message) Returns true if the message should be printed in the given timestamp, otherwise returns false.
 */

const Logger = function () {
  this.logs = new Map();
};

Logger.prototype.shouldPrintMessage = function (timestamp, message) {
  const allowedTimestamp = this.logs.get(message);

  if (allowedTimestamp === undefined) {
    this.logs.set(message, timestamp + 10);
    return true;
  }

  if (timestamp < allowedTimestamp) {
    return false;
  }

  this.logs.set(message, timestamp + 10);

  return true;
};

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */
