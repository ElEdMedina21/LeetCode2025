var productExceptSelf = function(nums) {
    const prefix = Array(nums.length).fill(nums[0])
    const suffix = Array(nums.length).fill(nums[nums.length-1])
    for(let i = 1; i < nums.length; i++){
        prefix[i] = nums[i] * prefix[i-1]
    }
    for(let j = nums.length-2; j >= 0; j--){
        suffix[j] = nums[j] * suffix[j+1] 
    }
    const result = []
    for(let i = 0; i < nums.length; i++){
        if(i-1 < 0){
            result.push(suffix[i+1])
            continue
        }
        if(i+1 > nums.length-1){
            result.push(prefix[nums.length-2])
            continue
        } 
        result.push(suffix[i+1] * prefix[i-1])
    }
    return result
};

console.log(productExceptSelf([-1,1,0,-3,3]))