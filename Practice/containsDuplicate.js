var containsDuplicate = function(nums) {
    const uniqueNums = new Set()
    nums.forEach(num => {
        uniqueNums.add(num)
    });
    const result = [...uniqueNums].length === nums.length ? false : true
    return result
};

var containsDuplicate = function(nums) {
    const uniqueNums = new Set()
    for(let num of nums){
        if(uniqueNums.has(num)) return true
        uniqueNums.add(num)
    }
    return false
};

console.log(containsDuplicate([1,2,3,4]))