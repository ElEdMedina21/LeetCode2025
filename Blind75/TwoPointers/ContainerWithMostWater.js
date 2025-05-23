var maxArea = function(height) {
    let result = 0
    let left = 0
    let right = height.length-1
    while(left < right){
        let area = Math.min(height[left],height[right]) * (right-left)
        result = Math.max(area,result)
        if(height[left] <= height[right]){
            left++
        }
        else if(height[right] < height[left]){
            right--
        }
    }
    return result
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))