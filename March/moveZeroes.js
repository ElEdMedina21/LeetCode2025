// var moveZeroes = function(nums) {
//     let zeroIndex = nums.indexOf(0); let i = 0;
//     while(i < nums.length){
//         if(zeroIndex == -1) return nums
//         if(nums[i] == 0){
//             i++
//         }
//         else if(i > zeroIndex){
//             nums[i] += nums[zeroIndex];
//             nums[zeroIndex] = nums[i] - nums[zeroIndex];
//             nums[i] = nums[zeroIndex] - nums[i];
//             i = zeroIndex
//             zeroIndex = nums.indexOf(0, i)
//         } else{
//             i++
//         }
//     }
//     return nums
// };

let moveZeroes = (nums)=>{
    let l = 0
    for(let r = 0; r < nums.length; r++){
        if(nums[r] != 0){
            nums[l] += nums[r]
            nums[r] = nums[l] - nums[r]
            nums[l] = nums[l] - nums[r]
            l++
        }
    }
    return nums
}

console.log(moveZeroes([0,1,0,3,12]))

