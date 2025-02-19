// var maxProfit = function(prices) {
//     let result = 0;
//     for(let i = 0; i < prices.length-1; i++){
//         let currentProfit = 0;
//         const subArray = prices.slice(i+1,prices.length)
//         const maxValue = Math.max(...subArray);
//         currentProfit = maxValue - prices[i];
//         currentProfit > result ? result = currentProfit : 0; 
//     }
//     return result
// };

var maxProfit = function(prices) {
    let min = prices[0];
    let maxProfit = 0;
    for(let price of prices){
        if(price < min) min = price;
        maxProfit = Math.max(price-min, maxProfit)
    }
    return maxProfit;
};

console.log(maxProfit([3,2,6,5,0,3]))