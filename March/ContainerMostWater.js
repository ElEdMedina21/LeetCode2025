var maxArea = function(height) {
    let l = 0;
    let maxArea = 0;
    for(let r = 1; r < height.length; r++){
        if(height[r] < height[l]){
            let currentArea = height[r] * r-l
            if(currentArea > maxArea){
                
            } 
        }
    }
};