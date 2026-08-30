/**
 * Top K Frequent Elements
 * Difficulty: Medium
 * Pattern: Hashmap
 *
 * Given an integer array nums and an integer k, return the k most frequent
 * elements. Any order is acceptable.
 *
 * Approach: count frequencies in a Map, sort entries by count descending,
 * slice top k, map back to just the values.
 *
 * Time: O(n log n) (sort dominates) | Space: O(n)
 */

function topKFrequentElements(nums, k) {
    let seenNumbers = new Map();

    for (let num of nums) {
        seenNumbers.set(num, (seenNumbers.get(num) || 0) + 1);
    }

    return Array.from(seenNumbers)
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map((e) => e[0]);
}

console.log(topKFrequentElements([1, 1, 1, 2, 2, 3], 2)); // [1, 2]
