function sockMerchant(n, ar) {
    // Write your code here
    const sockDictionary = new Map()

    for(let sockColor of ar){
        sockDictionary.set(sockColor, (sockDictionary.get(sockColor) || 0) + 1)
    }

    const sockAmounts = [...sockDictionary.values()]
    const totalPairs = sockAmounts.reduce((acc, cur) => acc + Math.trunc(cur/2), 0)

    return totalPairs
}

console.log(sockMerchant(7, [1,2,1,2,1,3,2]))