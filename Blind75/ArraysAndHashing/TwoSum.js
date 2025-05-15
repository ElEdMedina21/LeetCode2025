var twoSum = function(nums, target) {
    const pairs = {}
    for(let i = 0; i < nums.length; i++){
        if(pairs.hasOwnProperty(target-nums[i])){
            return [i,pairs[target-nums[i]]]
        }
        pairs[nums[i]] ? '' : pairs[nums[i]] = i
    }
    // for(let num of nums){
    //     if(num > target) continue
    //     if(pairs[target - num]) return [num, target - num]
    //     pairs[num] ? pairs[num] += 1*1 : pairs[num] = 1
    // }
};

console.log(twoSum([-3,4,3,90],0))