var findMin = function(nums) {
    let bot = 0
    let top = nums.length-1
    let result = Infinity;
    let mid;
    while(top >= bot){
        mid = bot+Math.floor((top-bot)/2);
        result = Math.min(result,nums[mid])
        if(nums[bot] <= nums[top]){
            result = Math.min(result,nums[bot])
            break;
        }
        if(nums[mid] >= nums[bot]){
            bot = mid + 1
        }
        else{
            top = mid - 1
        }
    }
    return result
};

console.log(findMin([4,5,6,7,0,1,2]))