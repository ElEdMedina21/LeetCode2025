var canPlaceFlowers = function(flowerbed, n) {
    let zeroCount = 1;
    for(let i = 0; i < flowerbed.length; i++){
        flowerbed[i] == 1 ? zeroCount = 0 : zeroCount++
        if(zeroCount == 3) {flowerbed[i-1] = 1; zeroCount = 1; n--}
    }
    if(zeroCount == 2) n--
    if(n <= 0) return true
    return false
};

console.log(canPlaceFlowers([1,0,0,0,1,0,0],2))