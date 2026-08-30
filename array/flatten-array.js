/**
 * Flatten Array (without Array.prototype.flat)
 * Difficulty: Medium
 * Pattern: Arrays / Stack
 *
 * Given an arbitrarily nested array, return a single flat array of all
 * elements, preserving original order.
 *
 * Approach: iterative stack-based traversal. Pop from the stack; if the
 * popped item is itself an array, push its contents back onto the stack;
 * otherwise unshift it into the result (unshift compensates for the
 * reversed order stack-popping produces, keeping final order correct).
 *
 * Time: O(n) where n = total elements across all nesting levels
 * Space: O(n)
 */

function flattenArray(array) {
    let stack = [...array];
    let result = [];

    while (stack.length) {
        let next = stack.pop();

        if (Array.isArray(next)) {
            stack.push(...next);
        } else {
            result.unshift(next);
        }
    }

    return result;
}

console.log(flattenArray([1, [2, 3], [4, [5, 6, [7, 8]]], 9]));
// [1, 2, 3, 4, 5, 6, 7, 8, 9]