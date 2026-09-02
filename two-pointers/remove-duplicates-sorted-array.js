/**
 * Remove Duplicates from Sorted Array
 * Difficulty: Easy
 * Pattern: Two Pointers (same-direction fast/slow)
 *
 * Given an integer array nums sorted in non-decreasing order, remove
 * duplicates in-place so each unique element appears once. Keep relative
 * order. Return k, the count of unique elements - only the first k
 * elements of the modified array are checked; anything beyond that can be
 * left as garbage.
 *
 * Approach: since the array is sorted, duplicates are always adjacent.
 * fast scans ahead; slow marks the last placed unique value. When
 * array[fast] differs from array[slow], a new unique value was found:
 * advance slow first, then write array[fast]'s value into that new slot.
 *
 * Time: O(n) | Space: O(1)
 */

function removeDuplicates(array) {
    let slow = 0;

    for (let fast = 1; fast < array.length; fast++) {
        if (array[slow] != array[fast]) {
            slow++;
            array[slow] = array[fast];
        }
    }

    return slow + 1;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5
console.log(removeDuplicates([1, 1, 2])); // 2