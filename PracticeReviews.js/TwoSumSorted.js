var twoSum = function(numbers, target) {
    let l = 0;
    let r = numbers.length-1;
    while(r > l){
        let sum = numbers[l] + numbers[r]
        console.log(sum)
        if(sum == target) return [l+1,r+1]
        sum > target ? r-- : l++
    }
};

console.log(twoSum([2,7,11,15],9))