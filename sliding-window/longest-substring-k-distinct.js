/**
 * Longest Substring with At Most K Distinct Characters
 * Difficulty: Medium
 * Pattern: Sliding Window (variable-size, Map-based)
 */

function longestSubstringKDistinct(s, k) {
    let left = 0;
    let map = new Map();
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        let rightChar = s[right];
        map.set(rightChar, (map.get(rightChar) || 0) + 1);

        while (map.size > k) {
            let leftChar = s[left];
            map.set(leftChar, map.get(leftChar) - 1);

            if (map.get(leftChar) === 0) {
                map.delete(leftChar);
            }

            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

console.log(longestSubstringKDistinct("eceba", 2)); // 3