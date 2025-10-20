// var twoSum = function(nums, target) {
//     const pairs = {}
//     for(let i = 0; i < nums.length; i++){
//         if(pairs.hasOwnProperty(target-nums[i])){
//             return [i,pairs[target-nums[i]]]
//         }
//         pairs[nums[i]] ? '' : pairs[nums[i]] = i
//     }
// };

var twoSum = (nums, target)=>{
    const pairs = new Map()
    for(let i = 0; i < nums.length; i++){
        let secondNum = target - nums[i]
        if(pairs.has(secondNum)){
            return [i, pairs.get(secondNum)]
        }
        pairs.has(nums[i]) ? '' : pairs.set(nums[i], i)
    }
}

console.log(twoSum([3,3],6))