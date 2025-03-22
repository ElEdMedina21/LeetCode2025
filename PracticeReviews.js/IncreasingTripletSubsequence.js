var increasingTriplet = function(nums) {
    let i = nums[0];
    let j = Infinity;
    for(let k = 1; k < nums.length; k++){
        if(nums[k] < i) {i = nums[k]; continue};
        if(nums[k] < j && nums[k] > i) {j = nums[k]; continue}
        if(nums[k] > j) return true
    }
    return false
};

console.log(increasingTriplet([1,1,-2,6]))