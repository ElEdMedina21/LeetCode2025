var isValidSudoku = function(board) {
    const rowsValues = new Map()
    const colsValues = new Map()
    const squares = new Map()

    for(let row = 0; row < board.length; row++){
        for(let col = 0; col < board[0].length; col++){

            if(board[row][col] == "."){
                continue
            }

            const squareKey = `${Math.floor(row/3)}${Math.floor(col/3)}`

            if(rowsValues.get(row) && rowsValues.get(row).has(board[row][col])) return false
            if(colsValues.get(col) && colsValues.get(col).has(board[row][col])) return false
            if(squares.get(squareKey) && squares.get(squareKey).has(board[row][col])) return false

            const currentRowValues = rowsValues.get(row) || new Set()
            rowsValues.set(row, currentRowValues.add(board[row][col])) 

            const currentColValues = colsValues.get(col) || new Set()
            colsValues.set(col, currentColValues.add(board[row][col]))

            const currentSquareValues = squares.get(squareKey) || new Set()
            squares.set(squareKey, currentSquareValues.add(board[row][col]))
        }
    }
    return true
};


console.log(isValidSudoku(
    [["5","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]]
))