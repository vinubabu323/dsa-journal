/**
 * Reverse a String
 * Difficulty: Easy
 * Pattern: Two Pointers (converging)
 */

function reverseString(array) {
    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        let temp = array[left];
        array[left] = array[right];
        array[right] = temp;
        left++;
        right--;
    }

    return array;
}

console.log(reverseString(["h", "e", "l", "l", "o"])); // ["o","l","l","e","h"]