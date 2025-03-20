var merge = function(intervals) {
    intervals.sort((a,b)=>a[0]-b[0])
    const result = []
    let min = intervals[0][0];
    let max = intervals[0][1];
    for(let i = 1; i < intervals.length; i++){
        if(intervals[i][0] > max || intervals[i][1] < min){
            result.push([min,max])
            min = intervals[i][0]
            max = intervals[i][1]
            continue
        }
        if(intervals[i][0] < min) min = intervals[i][0];
        if(intervals[i][0] >= max || intervals[i][1] > max) max = intervals[i][1]
    }
    result.push([min,max])
    return result
};

console.log(merge([[2,3],[4,5],[6,7],[8,9],[1,10]]))