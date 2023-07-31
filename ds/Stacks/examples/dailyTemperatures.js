/**
 * Given an array of integers temperatures represents the daily temperatures,
 * return an array answer such that answer[i] is the number of days you have to wait
 * after the ith day to get a warmer temperature.
 * If there is no future day for which this is possible, keep answer[i] == 0 instead.
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = function (temperatures) {
  const stack = [];
  const answers = new Array(temperatures.length).fill(0);

  for (let currDay = 0; currDay < temperatures.length; currDay++) {
    while (
      stack.length !== 0 &&
      temperatures[stack[stack.length - 1]] < temperatures[currDay]
    ) {
      answers[stack[stack.length - 1]] = currDay - stack[stack.length - 1];
      stack.pop();
    }

    stack.push(currDay);
  }

  return answers;
};
