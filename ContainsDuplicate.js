var containsDuplicate = function(nums) {
    const uniqueNums = new Set()
    for(let i = 0; i < nums.length; i++){
        if(uniqueNums.has(nums[i])) return true
        uniqueNums.add(nums[i])
    }
    return false
};

console.log(containsDuplicate([1,2,3,1]))