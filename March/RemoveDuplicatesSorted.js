var removeDuplicates = function(nums) {
    let latestIndex = 0
    const uniqueNums = new Set()
    for(let i = 0; i < nums.length; i++){
        if(!uniqueNums.has(nums[i])){
            uniqueNums.add(nums[i])
            nums[latestIndex] = nums[i]
            latestIndex++
        }
    }
    return latestIndex
};

console.log(removeDuplicates([1,1,2]))