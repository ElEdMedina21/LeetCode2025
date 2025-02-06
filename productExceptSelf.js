var productExceptSelf = function(nums) {
    const n = nums.length;
    const suffProd = new Array(n).fill(1)
    const prefProd = new Array(n).fill(1)
    const result = new Array(n).fill(1)

    for(let i = 1; i < n; i++){
        prefProd[i] = nums[i-1]*prefProd[i-1]
    }
    for(let j = n-2; j >= 0; j--){
        console.log(j);
        suffProd[j] = nums[j+1]*suffProd[j+1];
    }
    for(let i = 0; i < n; i++){
        result[i] = suffProd[i] * prefProd[i];
    }
    return result
};

console.log(productExceptSelf([1,2,3,4,5]));