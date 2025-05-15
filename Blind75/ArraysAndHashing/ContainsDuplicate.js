var containsDuplicate = function(nums) {
    const numSet = new Set()
    for(let num of nums){
        if (numSet.has(num)){
            return true
        }
        numSet.add(num)
    }
    return false
};

console.log(containsDuplicate([1,2,3,4]))