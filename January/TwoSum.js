var twoSum = function(nums, target) {
    const result = []
    for(let i = 0; i < nums.length; i++){
        let remain = target-nums[i];
        if(nums.includes(remain,i+1)){
            result.push(i, nums.indexOf(remain,i+1))
            return result
        }
    }
};

console.log(twoSum([2,7,11,15], 9))