var evalRPN = function(tokens) {
    let numStack = []
    let aux;
    for(let i = 0; i < tokens.length; i++){
        console.log(numStack)
        switch (tokens[i]) {
            case '+':
                aux = numStack.pop()
                numStack.push(aux+numStack.pop())
            break;

            case '-':
                aux = numStack.pop()
                numStack.push(numStack.pop()-aux)
            break;

            case '*':
                aux = numStack.pop()
                numStack.push(aux*numStack.pop())
            break;

            case '/':
                aux = numStack.pop()
                numStack.push(Math.trunc(numStack.pop()/aux))
            break;

            default:
                numStack.push(tokens[i]*1)
            break;
        }
    }
    return numStack[0]
};

console.log(evalRPN(["4","13","5","/","+"]))