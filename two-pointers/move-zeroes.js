/**
 * Move Zeroes
 * Difficulty: Easy
 * Pattern: Two Pointers (same-direction fast/slow)
 *
 * Given an integer array nums, move all 0's to the end while maintaining
 * the relative order of non-zero elements. Must be done in-place.
 *
 * Approach: fast scans every element; slow marks the next position for a
 * non-zero value. Whenever fast finds a non-zero, swap it into place at
 * slow and advance slow. Swapping (rather than overwriting) naturally
 * shifts zeros toward the back in a single pass - no separate cleanup
 * loop needed.
 *
 * Time: O(n) | Space: O(1)
 */

function moveZeroes(array) {
    let slow = 0;

    for (let fast = 0; fast < array.length; fast++) {
        if (array[fast] != 0) {
            let temp = array[slow];
            array[slow] = array[fast];
            array[fast] = temp;
            slow++;
        }
    }

    return array;
}

console.log(moveZeroes([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]
console.log(moveZeroes([0])); // [0]