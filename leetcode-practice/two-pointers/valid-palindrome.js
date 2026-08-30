/**
 * Valid Palindrome
 * Difficulty: Easy
 * Pattern: Two Pointers (converging)
 *
 * Given a string s, return true if it is a palindrome, considering only
 * alphanumeric characters and ignoring case.
 *
 * Approach: lowercase once upfront, converge left/right pointers, skipping
 * non-alphanumeric chars on either side before comparing.
 *
 * Time: O(n) | Space: O(1)
 */

function validPalindrome(string) {
    let lowerCaseString = string.toLowerCase();
    let left = 0;
    let right = lowerCaseString.length - 1;

    while (left < right) {
        if (!isAlphaNumeric(lowerCaseString[left])) {
            left++;
        } else if (!isAlphaNumeric(lowerCaseString[right])) {
            right--;
        } else if (lowerCaseString[left] !== lowerCaseString[right]) {
            return false;
        } else {
            left++;
            right--;
        }
    }

    return true;
}

function isAlphaNumeric(char) {
    return /[a-z0-9]/i.test(char);
}

console.log(validPalindrome("A man, a plan, a canal: Panama")); // true
