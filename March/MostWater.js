var maxArea = function(height) {
    let i = 0;
    let j = height.length-1;
    let maxArea = Math.min(height[i],height[j])*j-i;
    while(i < j){
        let currentArea = Math.min(height[i],height[j])*(j-i);
        console.log(`i:${i}, j:${j}, currentArea:${currentArea}, maxArea:${maxArea}`)
        if(currentArea > maxArea) maxArea = currentArea;
        if(height[i] > height[j]){
            j--
        }
        else{
            i++
        }
    }
    return maxArea;
};
console.log(maxArea([5,4,2,100,8,9]))