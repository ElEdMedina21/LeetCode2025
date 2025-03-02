var merge = function(intervals) {
    intervals.sort((a,b)=>a[0]-b[0])
    let result = []
    let currentArr = [intervals[0][0],intervals[0][1]]
    for(let i = 1; i < intervals.length; i++){
        if(intervals[i][0] > currentArr[1]){
            result.push(currentArr)
            currentArr = intervals[i]
            continue
        }
        if(intervals[i][1] > currentArr[1]) currentArr[1] = intervals[i][1]
    }
    result.push(currentArr)
    return result
};

console.log(merge([[1,4],[0,4]]))