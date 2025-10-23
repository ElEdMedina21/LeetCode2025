const backtrack = (openN, closedN, n, stack, result)=>{
    if(openN === closedN  && openN === n){
        result.push(stack)
        return
    }

    if(openN < n){
        backtrack(openN + 1, closedN, n, stack + "(", result)
    }

    if(closedN < openN){
        backtrack(openN, closedN + 1, n, stack + ")", result)
    }
}

var generateParenthesis = function(n) {
    const result = []
    backtrack(0,0, n, '', result)
    return result
};

console.log(generateParenthesis(3))