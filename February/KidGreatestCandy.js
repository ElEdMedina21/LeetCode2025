var kidsWithCandies = function(candies, extraCandies) {
    const greatest = Math.max(...candies)
    let result = []
    candies.forEach((kid)=>{
        kid+extraCandies >= greatest ? result.push(true) : result.push(false)
    })
    return(result)
};

console.log(kidsWithCandies([2,3,5,1,3],3))