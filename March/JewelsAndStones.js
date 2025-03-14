var numJewelsInStones = function(jewels, stones) {
    const jewelChars = new Set(jewels)
    let result = 0;
    for(let i = 0; i < stones.length; i++){
        if(jewelChars.has(stones[i])) result ++
    }
    return result
};

console.log(numJewelsInStones("z","ZZ"))