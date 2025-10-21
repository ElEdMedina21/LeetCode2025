var topKFrequent = function(nums, k) {
    const numAppearances = new Map()
    for(let num of nums){
        let currentValues = numAppearances.get(num) || 0
        currentValues++
        numAppearances.set(num, currentValues)
    }
    const keys = [...numAppearances.keys()]
    keys.sort((a,b)=>numAppearances.get(b)-numAppearances.get(a))
    return keys.slice(0, k)
};

console.log(topKFrequent([3,0,1,0],1))