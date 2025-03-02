var containsDuplicate = function(nums) {
    const presentNums = {}
    for(let i = 0; i < nums.length; i++){
        if(presentNums[nums[i]] > 0) return true
        presentNums[nums[i]] = 1
    }
    return false
};

console.log(containsDuplicate([1,2,3,4]))