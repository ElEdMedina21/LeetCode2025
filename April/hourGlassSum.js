function hourglassSum(arr) {
    let sumArr = []
    for(let height = 0; height < arr.length-2; height++){
        for(let width = 0; width < arr[0].length-2; width++){
            let sum = 0;
            sum += arr[height][width];
            sum += arr[height][width+1];
            sum += arr[height][width+2];
            sum += arr[height+1][width+1]
            sum += arr[height+2][width]
            sum += arr[height+2][width+1]
            sum += arr[height+2][width+2]
            sumArr.push(sum)
        }
    }
    return Math.max(...sumArr)
}


const arr = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
];
console.log(hourglassSum(arr))