var longestConsecutive = function(nums) {
    const uniqueNums = new Set(nums)
    let result = 0

    for(let num of uniqueNums){
        if(!uniqueNums.has(num-1)){
            let count = 0;
            while(uniqueNums.has(num+count)){
                count++
            }
            result = Math.max(result,count)
        }
    }

    return result
};

console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))