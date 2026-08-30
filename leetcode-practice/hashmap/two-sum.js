/**
 * Two Sum
 * Difficulty: Easy
 * Pattern: Hashmap
 *
 * Given an array of integers nums and an integer target, return indices of
 * the two numbers such that they add up to target. Exactly one solution
 * exists; may not use the same element twice.
 *
 * Approach: single pass, store each number -> index in a Map. Before storing,
 * check if the complement (target - num) already exists.
 *
 * Time: O(n) | Space: O(n)
 */

function twoSum(array, target) {
    let seenNumbers = new Map();

    for (let i = 0; i < array.length; i++) {
        let complement = target - array[i];

        if (seenNumbers.has(complement)) {
            return [seenNumbers.get(complement), i];
        }

        seenNumbers.set(array[i], i);
    }

    return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
