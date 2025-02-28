// var canPlaceFlowers = function(flowerbed, n) {
//     if(n == 0) return true
//     let currentIndex = flowerbed.indexOf(0)
//     console.log(currentIndex)
//     for(let i = currentIndex; i<flowerbed.length; i++){
//         if(flowerbed[i] !=0) continue;
//         if(flowerbed[i+1] == 0 && flowerbed[i-1] ==0){
//             console.log(i-1)
//             n--
//             if(n == 0) return true
//             i=flowerbed.indexOf(0,i+1)
//         }
//     }  
//     return false};

var canPlaceFlowers = function(flowerbed, n) {
    let zeroCount = 1;
    for(let i = 0; i<flowerbed.length; i++){
        if(i === flowerbed.length-1) zeroCount++
        flowerbed[i] === 0 ? zeroCount ++ : zeroCount = 0 
        console.log(zeroCount)
        if(zeroCount >= 3){
            flowerbed[i-1] = 1
            zeroCount = 1
            n--
        }
    }
    return n <= 0
};

console.log(canPlaceFlowers([1,0,0,0],1))