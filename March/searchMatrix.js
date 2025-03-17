var searchMatrix = function(matrix, target) {
    let subArrLength = matrix[0].length
    let lowSubMatrix = 0;
    let highSubMatrix = matrix.length-1
    let midSubMatrix;
    while(highSubMatrix >= lowSubMatrix){
        midSubMatrix = lowSubMatrix + Math.floor((highSubMatrix-lowSubMatrix)/2)
        if(matrix[midSubMatrix][subArrLength-1] >= target && matrix[midSubMatrix][0] <= target){
            break
        }
        else if(matrix[midSubMatrix][subArrLength-1] < target){
            lowSubMatrix = midSubMatrix + 1
        }
        else{
            highSubMatrix = midSubMatrix-1
        }
    }
    let low = 0
    let high = subArrLength-1
    let mid;
    while(high >= low){
        mid = low + Math.floor((high-low)/2)
        if(matrix[midSubMatrix][mid] == target){
            return true
        }
        matrix[midSubMatrix][mid] > target ? high = mid-1 : low = mid+1;
    }
    return false
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3))