var topKFrequent = function(nums, k) {
    const values = {};
    nums.forEach((num)=>{
        if(values.hasOwnProperty(`${num}`)){
            values[`${num}`]++
        } else {
            values[`${num}`] = 1
        }
    })
    const uniqueNums = Object.keys(values).map(Number)
    const sortedNums = uniqueNums.slice().sort((a,b)=>values[b]-values[a]);
    sortedNums.forEach((num)=>{
        num*=1
        console.log(typeof(num))
    })
    return sortedNums.slice(0,k)
};

console.log(topKFrequent([1,1,1,2,2,3],2));