var threeSum = function(nums) {
    nums.sort((a,b)=>a-b)
    let result = []
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > 0) break;
        if(i > 0 && nums[i] == nums[i-1]) continue
        let bot = i+1
        let top = nums.length-1;
        let sum;
        while(bot < top){
            sum = nums[i] + nums[bot] + nums[top];
            console.log(sum)
            if(sum > 0){
                top--
            }
            else if(sum < 0){
                bot ++
            }
            else{
                result.push([nums[i], nums[bot], nums[top]])
                bot++;
                top--;
                while(bot < top && nums[bot] === nums[bot-1]){
                    bot++;
                }
            }
        }
    }
    return result
};

console.log(threeSum([-1,0,1,2,-1,-4]))