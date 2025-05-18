var threeSum = function(nums) {
    nums = nums.sort((a,b)=>a-b)
    let result = []

    for(let i = 0; i < nums.length; i++){
        if(nums[i] > 0) break
        if(i > 0 && nums[i-1] == nums[i]) continue

        let leftPointer = i+1
        let rightPointer = nums.length-1

        while(leftPointer < rightPointer){
            let sum = nums[i] + nums[leftPointer] + nums[rightPointer]

            if(sum > 0){
                rightPointer--
            }
            else if(sum < 0){
                leftPointer++
            }
            else{
                result.push([nums[i],nums[leftPointer],nums[rightPointer]])
                rightPointer--
                leftPointer++
                while(leftPointer < rightPointer && nums[leftPointer] == nums[leftPointer-1]){
                leftPointer++
            }
            }

        }

    }
    return result
};

console.log(threeSum([-1,0,1,2,-1,-4]))