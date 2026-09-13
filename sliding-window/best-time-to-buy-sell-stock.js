/**
 * Best Time to Buy and Sell Stock
 * Difficulty: Easy
 * Pattern: Sliding Window / single-pass
 */

function maxProfit(prices) {
  let minPriceSoFar = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    minPriceSoFar = Math.min(minPriceSoFar, prices[i]);
    let todaysProfit = prices[i] - minPriceSoFar;
    maxProfit = Math.max(maxProfit, todaysProfit);
  }

  return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
