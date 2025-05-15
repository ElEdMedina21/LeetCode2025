var longestConsecutive = function(nums) {
    const uniqueNums = new Set(nums)
    let res = 0

    for(let num of uniqueNums){
        if(!uniqueNums.has(num-1)){
            let len = 1
            while(uniqueNums.has(num+len)){
                len++
            }
            res = Math.max(res,len)
        }
    }

    return res
};

console.log(longestConsecutive([1,0,1,2]))