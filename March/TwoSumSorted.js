var twoSum = function(numbers, target) {
    let i = 0; let j = numbers.length-1;
    while(i<j){
        if(numbers[i]+numbers[j] == target) return [i+1,j+1]
        numbers[i]+numbers[j] > target ? j-- : i++
    }
};

console.log(twoSum([-1,0],-1))