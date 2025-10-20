var maxProfit = function(prices) {
    let leftPointer = 0;
    let rightPointer = 1;
    let maxProfit = 0
    while(rightPointer < prices.length){
        if(prices[rightPointer] > prices[leftPointer]){
            maxProfit = Math.max(prices[rightPointer]-prices[leftPointer], maxProfit)
        }
        else{
            leftPointer = rightPointer;
        }
        rightPointer++
    }
    return maxProfit
};

console.log(maxProfit([7,6,4,3,1]))

var maxProfit = (prices)=>{
    let minPrice = prices[0]
    let maxProfit = 0

    for(let sellPrice of prices){
        maxProfit = Math.max(sellPrice-minPrice,maxProfit)
        minPrice = Math.min(sellPrice, minPrice)
    }
    return maxProfit
}

console.log(maxProfit([7,1,5,3,6,4]))
