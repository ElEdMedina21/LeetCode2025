var evalRPN = function(tokens) {
    let stack = [];
    let result = 0;
    for(let i = 0; i < tokens.length; i++){
        switch(tokens[i]){
            case '+':
                stack.push(stack.pop() + stack.pop())
                break
            case '-':
                result = stack.pop()
                var newNum = stack.pop()
                result = newNum - result
                stack.push(result)
                break
            case '*':
                stack.push(stack.pop() * stack.pop())
                break
            case '/':
                result = stack.pop()
                var newNum = stack.pop()
                stack.push(Math.trunc(newNum/result))
                break
            default:
                stack.push(tokens[i]*1);
                break
        }
    }
    return stack[0]
};

console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))