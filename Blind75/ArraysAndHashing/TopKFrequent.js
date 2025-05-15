var topKFrequent = function(nums, k) {
    const numAppearances = new Map()
    for(let num of nums){
        numAppearances.has(num) ? numAppearances.set(num, numAppearances.get(num)+1) : numAppearances.set(num, 1)
    }
    let keys = [...numAppearances.keys()]
    keys.sort((a,b)=>numAppearances.get(b)-numAppearances.get(a))
    return keys.splice(0,k)
};

console.log(topKFrequent([1,1,1,2,2,3],2))