var trap = function(height) {
    let maxLeft = [0]
    let maxRight = [0]
    let currentLeftMax = 0; let currentRightMax = 0
    let j = height.length-1
    for(let i = 0; i < height.length; i++){
        if(height[i] > currentLeftMax) currentLeftMax = height[i];
        maxLeft.push(currentLeftMax)
        
        if(height[j-i] > currentRightMax) currentRightMax = height[j-i];
        maxRight.push(currentRightMax)
    }
    maxRight = maxRight.reverse()
    let result = 0;
    for(let i = 0; i < height.length; i++){
        let water = Math.min(maxLeft[i],maxRight[i]) - height[i]
        if(water > 0) result += water
    }
    return result
};

console.log(trap([4,2,3]))