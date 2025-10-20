var isValidSudoku = function(board) {
    const subArr = new Map()
    const row = new Map()
    const col = new Map()

    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++){
            if(board[i][j] === ".") continue

            const squareKey = `${[Math.floor(i/3),Math.floor(j/3)]}`

            if((row.has(i) && row.get(i).has(board[i][j])) ||
               (col.has(j) && col.get(j).has(board[i][j])) ||
               (subArr.has(squareKey) && subArr.get(squareKey).has(board[i][j]))) {return false}

            if(!subArr.has(squareKey)) subArr.set(squareKey, new Set())
            if(!row.has(i)) row.set(i, new Set())
            if(!col.has(j)) col.set(j, new Set())

            row.get(i).add(board[i][j])
            col.get(j).add(board[i][j])
            subArr.get(squareKey).add(board[i][j])
        }
    }
    return true
};

console.log(isValidSudoku([[".",".",".",".","5",".",".","1","."],[".","4",".","3",".",".",".",".","."],[".",".",".",".",".","3",".",".","1"],["8",".",".",".",".",".",".","2","."],[".",".","2",".","7",".",".",".","."],[".","1","5",".",".",".",".",".","."],[".",".",".",".",".","2",".",".","."],[".","2",".","9",".",".",".",".","."],[".",".","4",".",".",".",".",".","."]]))
