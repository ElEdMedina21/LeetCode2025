var maxOperations = function(nums, k) {
    nums.sort((a,b)=>a-b)
    let l = 0; let r = nums.length-1;
    let result = 0;
    while(l < r){
        let sum = nums[l] + nums[r]
        if(sum === k){
            result++;
            l++;
            r--;
        }
        else if(sum > k){
            r--
        }
        else{
            l++
        }
    }
    return result
};

console.log(maxOperations([-1, -2, -3, -4, -5],-6))