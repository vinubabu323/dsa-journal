/**
 * Group Anagrams
 * Difficulty: Medium
 * Pattern: Hashmap
 *
 * Given an array of strings strs, group the anagrams together.
 *
 * Approach: Map keyed by sorted-string signature -> array of matching words.
 * Mutate the array in place with .push() rather than reassigning via .set(),
 * since Map.get() returns a reference to the same array.
 *
 * Time: O(n * k log k) where k = avg string length | Space: O(n)
 */

function groupAnagrams(arrayOfStrings) {
    let seenStrings = new Map();

    for (let str of arrayOfStrings) {
        let sortedString = str.split('').sort().join('');

        if (!seenStrings.has(sortedString)) {
            seenStrings.set(sortedString, [str]);
        } else {
            seenStrings.get(sortedString).push(str);
        }
    }

    return Array.from(seenStrings).map((e) => e[1]);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// [["eat","tea","ate"],["tan","nat"],["bat"]]
