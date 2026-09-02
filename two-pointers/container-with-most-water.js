/**
 * Container With Most Water
 * Difficulty: Medium
 * Pattern: Two Pointers (converging)
 *
 * Given an array height where height[i] represents the height of a
 * vertical line at index i, find two lines that together with the x-axis
 * form a container holding the most water.
 *
 * Approach: converge left/right pointers. At each step, compute
 * area = (right - left) * min(height[left], height[right]) - width is the
 * index gap, height is capped by the shorter of the two walls (water
 * spills past the shorter wall). Move the pointer at the SHORTER wall:
 * moving the taller one can never help, since width only shrinks and the
 * height cap stays bottlenecked by the same shorter wall either way. Only
 * moving the shorter wall gives a chance at a taller replacement.
 *
 * Time: O(n) | Space: O(1)
 */

function maxAmountOfWaterContainerCanContain(array) {
    let left = 0;
    let right = array.length - 1;
    let maxArea = 0;

    while (left < right) {
        let area = (right - left) * Math.min(array[left], array[right]);
        maxArea = Math.max(maxArea, area);

        if (array[left] < array[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}

console.log(maxAmountOfWaterContainerCanContain([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxAmountOfWaterContainerCanContain([1, 1])); // 1