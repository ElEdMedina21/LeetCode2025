var productExceptSelf = function(nums) {
    const numsLength = nums.length
    const prefix = new Array(numsLength).fill(1)
    const suffix = new Array(numsLength).fill(1)

    for(let i = 1; i < numsLength; i++){
        prefix[i] = nums[i-1] * prefix[i-1]
        suffix[numsLength - 1 - i] = nums[numsLength-i] * suffix[numsLength-i]
    }

    const result = []
    for(let i = 0; i < numsLength; i++){
        result.push(prefix[i]*suffix[i])
    }

    return result
};

console.log(productExceptSelf([-1,1,0,-3,3]))