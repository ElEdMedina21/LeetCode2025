var moveZeroes = function(nums) {
    let l = 0
    for(let r = 0; r < nums.length; r++){
        if(nums[r] != 0){
            nums[l] += nums[r]
            nums[r] = nums[l] - nums[r]
            nums[l] = nums[l] - nums[r]
            l++
        }
    }
    return nums
};

console.log(moveZeroes([0,1,0,3,12]))