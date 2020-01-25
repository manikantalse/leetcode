/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var min = prices[0], profit = 0;
    for(var i=1; i<prices.length; i++){
        if(min > prices[i]){
            min = prices[i];
        }
        if(prices[i]-min > profit){
            profit = prices[i]-min;
        }
    }
    return profit;
};