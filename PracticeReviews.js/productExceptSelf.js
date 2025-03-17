var productExceptSelf = function(nums) {
    let pref = new Array(nums.length).fill(1)
    let suff = new Array(nums.length).fill(1)
    let j = nums.length - 2
    for(let i = 1; i < nums.length; i++){
        suff[i] = suff[i-1] * nums[i-1]
        pref[j] = pref[j+1] * nums[j+1]
        j--
    }
    let result = []
    for(let i = 0; i < nums.length; i++){
        result.push(pref[i]*suff[i])
    }
    return result
};

console.log(productExceptSelf([-1,1,0,-3,3]))