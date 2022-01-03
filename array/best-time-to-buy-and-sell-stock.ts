// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// https://leetcode.com/submissions/detail/608031259/

function maxProfit(prices: number[]): number {
    let min = Number.MAX_SAFE_INTEGER;
    let maxProfit = 0;
    for(const price of prices) {
        min = Math.min(price, min);
        maxProfit = Math.max(maxProfit, price - min);
    }
    return maxProfit;
};
