/**
 * Two Sum II - Input Array Is Sorted
 * Difficulty: Medium
 * Pattern: Two Pointers (converging)
 *
 * Given a 1-indexed array of integers sorted in non-decreasing order, find
 * two numbers that add up to target. Return their 1-indexed positions.
 *
 * Approach: converge left/right pointers. Sum too small -> move left up
 * (need a bigger value). Sum too big -> move right down (need a smaller
 * value). Sortedness guarantees this safely rules out ranges of pairs.
 *
 * Time: O(n) | Space: O(1)
 */

function twoSum(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        let sum = array[left] + array[right];

        if (sum === target) {
            return [left + 1, right + 1];
        }
        if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // [1, 2]
console.log(twoSum([1, 2, 3, 4, 5], 8)); // [3, 5]
