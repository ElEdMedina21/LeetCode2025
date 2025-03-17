var search = function(nums, target) {
    let low = 0;
    let high = nums.length-1;
    let mid;
    while(high >= low){
        mid = low + Math.floor((high-low)/2)
        if(nums[mid] == target){
            return mid
        }
        nums[mid] > target ? high = mid-1 : low = mid+1;
    }
    return -1
};

console.log(search([-1,0,3,5,9,12], 9))