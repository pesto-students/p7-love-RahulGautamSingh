// best time to buy and sell stock
// TimeComplexity: O(n)
function profit_maximisation(stocks) {
    let buy = stocks[0], max_profit = 0, n = stocks.length;
    for (let i = 1; i < n; i++) {
        let todays_price = stocks[i];
        if (todays_price < buy) buy = todays_price;
        else if (todays_price > buy) {
            max_profit = Math.max(max_profit, todays_price - buy);
        }
    }
    return max_profit;
}

console.log(profit_maximisation([7, 6, 4, 3, 1]))