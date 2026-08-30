/**
 * Find Duplicates / Remove Duplicates
 * Difficulty: Easy
 * Pattern: Hashmap / Arrays
 *
 * findDuplicates: return each value that appears more than once, exactly
 * once, in the order it was first re-encountered.
 *
 * removeDuplicates: return a new array with duplicates removed, preserving
 * the original first-occurrence order.
 *
 * Approach: single pass with an object (Object.create(null) to avoid
 * prototype pollution) tracking seen values.
 *
 * Time: O(n) | Space: O(n)
 */

function findDuplicates(array) {
    let seen = Object.create(null);
    let added = Object.create(null);
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (seen[array[i]] && !added[array[i]]) {
            result.push(array[i]);
            added[array[i]] = true;
        }
        seen[array[i]] = true;
    }

    return result;
}

function removeDuplicates(array) {
    let seen = Object.create(null);
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (!seen[array[i]]) {
            result.push(array[i]);
        }
        seen[array[i]] = true;
    }

    return result;
}

const arr = [1, 2, 3, 2, 4, 1, 5, 3];
console.log(findDuplicates(arr));    // [2, 1, 3]
console.log(removeDuplicates(arr));  // [1, 2, 3, 4, 5]