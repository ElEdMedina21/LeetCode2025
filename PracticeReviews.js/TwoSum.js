var twoSum = function(nums, target) {
    const presentNums = {}
    for(let i = 0; i < nums.length; i++){
        console.log('current num: ' + nums[i])
        if(presentNums.hasOwnProperty(target - nums[i])){
            return [i, presentNums[target-nums[i]]]
        }
        presentNums[nums[i]] = i
    }
};

console.log(twoSum([-3,4,3,90], 0))