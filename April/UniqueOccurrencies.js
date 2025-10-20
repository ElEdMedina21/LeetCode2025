var uniqueOccurrences = function(arr) {
    const presentValues = {}
    arr.forEach((num)=>{
        if(presentValues.hasOwnProperty(num)){
            presentValues[num] += 1
        }else{
            presentValues[num] = 1
        }
    })
    const occurrencies = Object.values(presentValues)
    const uniqueValues = new Set(occurrencies)
    if(uniqueValues.size < occurrencies.length) return false
    return true
};

console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]))