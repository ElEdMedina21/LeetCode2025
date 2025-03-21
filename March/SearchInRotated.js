var search = function(nums, target) {
    let bot = 0;
    let top = nums.length-1;
    let mid
    while(top >= bot){
        mid = bot + Math.floor((top-bot)/2);
        console.log(nums[mid])
        if(nums[mid] == target){
            return mid
        } 
        if(nums[bot] <= nums[mid]){
            nums[bot] <= target && target < nums[mid] ? top = mid - 1 : bot = mid + 1;
        }
        else{
            nums[top] >= target && target > nums[mid] ? bot = mid + 1 : top = mid - 1;
        }
    }
    return -1
};

const NeetCodeSearch = (nums,target)=>{
    let bot = 0; 
    let top = nums.length-1;
    let mid;
    while(top >= bot){
        mid = bot + Math.floor((top - bot) / 2)

        if(nums[mid] === target) return mid

        if(nums[mid] >= nums[bot]){
            target > nums[mid] || target < nums[bot] ? bot = mid + 1 : top = mid - 1;
        }
        else{
            target < nums[mid] || target > nums[top] ? top = mid - 1 : bot = mid + 1;
        }
    }
    return -1
}

console.log(NeetCodeSearch([4,5,6,7,8,1,2,3],8))