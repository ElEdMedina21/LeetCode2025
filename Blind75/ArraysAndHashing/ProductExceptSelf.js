var productExceptSelf = function(nums) {
    let prefix = new Array(nums.length).fill(1)
    let suffix = new Array(nums.length).fill(1)
    
    for(let i = 1; i < nums.length; i++){
        prefix[i] =  nums[i-1] * prefix[i-1]
        suffix[suffix.length-1-i] = nums[nums.length-i] * suffix[suffix.length-i]
    }

    let result = []
    for(let i = 0; i < nums.length; i++){
        result.push(prefix[i]*suffix[i])
    }
    return result
};

console.log(productExceptSelf([-1,1,0,-3,3]))