/**
 * Contains Duplicate
 * Difficulty: Easy
 * Pattern: Hashmap (Set)
 *
 * Given an integer array nums, return true if any value appears at least
 * twice, false if every element is distinct.
 *
 * Approach: Set for membership-only checks (no need for key-value pairs).
 *
 * Time: O(n) | Space: O(n)
 */

function checkDuplicate(array) {
    let seenNumbers = new Set();

    for (let num of array) {
        if (seenNumbers.has(num)) return true;
        seenNumbers.add(num);
    }

    return false;
}

console.log(checkDuplicate([1, 2, 3, 1])); // true
