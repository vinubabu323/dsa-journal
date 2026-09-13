/**
 * First Unique Character in a String
 * Difficulty: Easy
 * Pattern: Hashmap
 */

function firstUniqChar(string) {
    let seen = {};

    for (let i = 0; i < string.length; i++) {
        seen[string[i]] = (seen[string[i]] || 0) + 1;
    }

    for (let i = 0; i < string.length; i++) {
        if (seen[string[i]] === 1) {
            return i;
        }
    }

    return -1;
}

console.log(firstUniqChar("leetcode")); // 0