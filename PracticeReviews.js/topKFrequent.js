var topKFrequent = function(nums, k) {
    const frequencies = {}
    for(let i = 0; i < nums.length; i++){
        frequencies.hasOwnProperty(nums[i]) ? frequencies[nums[i]].push(nums[i]) : frequencies[nums[i]] = [nums[i]]
    }
    let sortedArrs = Object.values(frequencies).sort((a,b)=> b.length - a.length)
    console.log(sortedArrs)
    let result = []
    for(let j = 0; j < k; j++){
        result.push(sortedArrs[j][0])
    }
    return result
};

console.log(topKFrequent([1],1))