var spiralOrder = function(matrix) {
    let iterations = 0;
    let count = 0
    let result = []
    const dimensions = [matrix.length, matrix[0].length]
    const totalCells = dimensions[0]*dimensions[1];
    while(count < totalCells){
        for(let i = 0+iterations; i<dimensions[1]-iterations; i++){
            result.push(matrix[0+iterations][i])
            count++
        }
        if(count == totalCells) break
        for(let j = 1+iterations; j<dimensions[0]-iterations; j++){
            result.push(matrix[j][matrix[j].length-1-iterations])
            count++
        }
        if(count == totalCells) break
        for(let bottomRow = dimensions[1]-iterations-2; bottomRow>=0+iterations; bottomRow--){
            result.push(matrix[dimensions[0]-iterations-1][bottomRow])
            count++
        }
        if(count == totalCells) break
        for(let leftCol = dimensions[0]-2-iterations; leftCol > 0+iterations; leftCol--){
            result.push(matrix[leftCol][0+iterations])
            count++
        }
        iterations++
    }
    return result
};

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))