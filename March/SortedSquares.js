// var sortedSquares = function(nums) {
//     nums.sort((a,b)=>Math.abs(a)-Math.abs(b))
//     for(let i = 0; i < nums.length; i++){
//         nums[i]*=nums[i]
//     }
//     return nums
// };
var sortedSquares = function(nums) {
    let result = []
    let i = 0; let j = nums.length-1
    while(i != j){
        if(nums[j] > Math.abs(nums[i])) {
            result.push(nums[j]*nums[j])
            j--
        }
        else {
            result.push(nums[i]*nums[i])
            i++
        }
    }
    result.push(nums[j]*nums[j])
    return result.reverse()
};
console.log(sortedSquares([-4,-1,0,3,10]))