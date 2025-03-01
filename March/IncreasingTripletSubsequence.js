var increasingTriplet = function(nums) {
    let j = Infinity
    let i = nums[0]
    for(let value = 1; value < nums.length; value++){
        if(nums[value] < i){
            i = nums[value]
            continue
        }
        if(nums[value] > i && nums[value] < j){
            j = nums[value]
            continue
        }
        if(nums[value]>j){
            return true
        }
    }
    return false
};

console.log(increasingTriplet([0,4,2,1,0,-1,-3]))
