var summaryRanges = function(nums) {
    let result = []
    for(let i = 0; i < nums.length; i++){
        let range = `${nums[i]}`;
        if(nums.includes(nums[i]+1)){
            for(i; i<nums.length; i++){
                if(!nums.includes(nums[i]+1)){
                    range += `->${nums[i]}`
                    result.push(range)
                    break
                }
            }
        }
        else{
            result.push(range)
        }
    }
    return result
};

console.log(summaryRanges([0,1,2,4,5,7]))