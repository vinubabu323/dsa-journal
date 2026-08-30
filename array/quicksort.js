/**
 * Sort an Array - Quicksort
 * Difficulty: Medium
 * Pattern: Arrays / Divide & Conquer
 *
 * Sort an array of integers.
 *
 * Approach: classic divide-and-conquer quicksort. Pick the last element as
 * pivot, partition remaining elements into "less than pivot" and "greater
 * than or equal to pivot" arrays, recurse on both, and combine with the
 * pivot in the middle.
 *
 * Note: this is a functional (not in-place) implementation - creates new
 * arrays at each recursive call, so space is O(n) rather than the O(log n)
 * of a classic in-place partition-swap version.
 *
 * Time: O(n log n) average, O(n^2) worst case | Space: O(n)
 */

function quickSort(array) {
    if (array.length <= 1) return array;

    let left = [];
    let right = [];
    let pivot = array[array.length - 1];

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    return [
        ...quickSort(left),
        pivot,
        ...quickSort(right)
    ];
}

console.log(quickSort([8, 3, 1, 7, 0, 10, 2, 3, -5, 4]));
// [-5, 0, 1, 2, 3, 3, 4, 7, 8, 10]