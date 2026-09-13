/**
 * Longest Substring Without Repeating Characters
 * Difficulty: Medium
 * Pattern: Sliding Window (variable-size)
 */

function longestSubstring(s) {
    let seen = new Set();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        while (seen.has(s[right])) {
            seen.delete(s[left]);
            left++;
        }

        seen.add(s[right]);

        let currentWindowLength = right - left + 1;
        maxLength = Math.max(maxLength, currentWindowLength);
    }

    return maxLength;
}

console.log(longestSubstring("abcabcbb")); // 3