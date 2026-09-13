/**
 * Valid Parentheses
 * Difficulty: Easy
 * Pattern: Stack
 */

function isValid(string) {
    let parenthesis = { "(": ")", "{": "}", "[": "]" };
    let stack = [];
    let openingBrackets = Object.keys(parenthesis);

    for (let i = 0; i < string.length; i++) {
        if (openingBrackets.includes(string[i])) {
            stack.push(string[i]);
        } else {
            if (parenthesis[stack.pop()] != string[i]) {
                return false;
            }
        }
    }

    return stack.length == 0 ? true : false;
}

console.log(isValid("()[]{}")); // true