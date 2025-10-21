var twoSum = (nums, target)=>{
    const pairsMap = new Map()
    for(let i = 0; i < nums.length; i++){
        if(pairsMap.has(nums[i])){
            return [i,pairsMap.get(nums[i])]
        }
        const toFind = target - nums[i]
        pairsMap.set(toFind, i)
    }
}

console.log(twoSum([3,2,4], 6))