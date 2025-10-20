var topKFrequent = function(nums, k) {
    const numFreq = new Map()
    nums.forEach((num)=>{
        numFreq.set(num, (numFreq.get(num) || 0) + 1)
    })
    let singleNums = Array.from(numFreq.keys())
    singleNums.sort((a,b)=>numFreq.get(b)-numFreq.get(a))
    return singleNums.slice(0,k)
};

console.log(topKFrequent([3,0,1,0],2))