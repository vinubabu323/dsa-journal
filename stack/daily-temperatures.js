/**
 * Daily Temperatures
 * Difficulty: Medium
 * Pattern: Stack (monotonic stack)
 * NOTE: flagged for another revision pass to fully solidify
 */

function dailyTemperatures(temperatures) {
    let stack = [];
    let result = Array(temperatures.length).fill(0);

    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length != 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
            let poppedIndex = stack.pop();
            result[poppedIndex] = i - poppedIndex;
        }
        stack.push(i);
    }

    return result;
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // [1,1,4,2,1,1,0,0]