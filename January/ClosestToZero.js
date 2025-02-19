//Find Closest to Zero

var findClosestNumber = function(nums) {
    let result = [Math.abs(nums[0]), nums[0] > 0]
    nums.forEach((num)=>{
        if(Math.abs(num) < Math.abs(result[0])){
            result[0] = num;
            result[1] = num > 0;
        }
        if(Math.abs(num) == Math.abs(result[0])){
            if(!result[1]){
                result[0] = num;
                result[1] = num > 0;
            }
        }
    })
    return result[0]
};

var findClosestNumber = function(nums) {
    let closest = Infinity;

    for (let num of nums) {
        if (Math.abs(num) < Math.abs(closest)) {
        closest = num
        } else if (Math.abs(num) === Math.abs(closest)) {
        closest = Math.max(num, closest)
        }
}

return closest;
};

//La principal mejora que podemos implementar en este código es la función de Math.Max, la cual yo desconocía
console.log(findClosestNumber([2,-1,1,4,0]))