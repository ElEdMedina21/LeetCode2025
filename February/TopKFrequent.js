// var topKFrequent = function(nums, k) {
//     const values = {};
//     nums.forEach((num)=>{
//         if(values.hasOwnProperty(`${num}`)){
//             values[`${num}`]++
//         } else {
//             values[`${num}`] = 1
//         }
//     })
//     const uniqueNums = Object.keys(values).map(Number)
//     const sortedNums = uniqueNums.slice().sort((a,b)=>values[b]-values[a]);
//     sortedNums.forEach((num)=>{
//         num*=1
//         console.log(typeof(num))
//     })
//     return sortedNums.slice(0,k)
// };

var topKFrequent = function(nums, k) {
    const frequencies = Array.from({length:nums.length+1},()=>[])
    const locations = {}
    nums.forEach((num)=>{
        locations[num] = (locations[num] || 0) + 1;
    })
    for(value in locations){
        frequencies[locations[value]].push(parseInt(value))
    }
    const res = []
    for(let i = frequencies.length-1 ; i >=0; i--){
        for(let n of frequencies[i]){
            res.push(n);
            if(res.length == k){
                return res
            }
        }
    }
};

console.log(topKFrequent([1,1,1,2,2,3],2));