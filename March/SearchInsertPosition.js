var searchInsert = function(nums, target) {
    let bot = 0
    let top = nums.length-1
    let mid;
    while(top >= bot){
        mid = bot + Math.floor((top-bot)/2)
        if(nums[mid] === target) return mid
        nums[mid] > target ? top = mid - 1 : bot = mid + 1
    }
    if(nums[mid] > target) return mid
    return mid+1
};

console.log(searchInsert([1,3,5,6],0))