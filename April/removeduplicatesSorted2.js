var removeDuplicates = function(nums) {
    let indexPointer = 2;
    for(let i = 2; i < nums.length; i++){
        if(nums[i] == nums[indexPointer-1] && nums[i] == nums[indexPointer-2]){
            continue
        }
        else{
            nums[indexPointer] = nums[i]
            indexPointer++ 
        }
    }
    return indexPointer
};

console.log(removeDuplicates([1,1,1,2,2,3]))