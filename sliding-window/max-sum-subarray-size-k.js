/**
 * Maximum Sum Subarray of Size K
 * Difficulty: Easy
 * Pattern: Sliding Window (fixed-size)
 */

function maxSubArray(array, k) {
    let windowSum = 0;

    for (let i = 0; i < k; i++) {
        windowSum += array[i];
    }

    let maxSum = windowSum;

    for (let i = k; i < array.length; i++) {
        windowSum = windowSum - array[i - k] + array[i];
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}

console.log(maxSubArray([2, 1, 5, 1, 3, 2], 3)); // 9