var evalRPN = function(tokens) {
    const numStack = []
    let secondNum = 0

    for(let token of tokens){
        if(isNaN(token)){
            switch (token) {
                case "+":
                    numStack.push(numStack.pop()*1 + numStack.pop()*1)
                    break;
                case "-":
                    secondNum = numStack.pop()*1
                    numStack.push(numStack.pop() - secondNum)
                    break;
                case "*":
                    numStack.push(numStack.pop()*1 * numStack.pop()*1)
                    break;
                case "/":
                    secondNum = numStack.pop()*1
                    numStack.push(Math.trunc(numStack.pop()*1 / secondNum))
                    break;

                default:
                    break;
            }
            continue
        }
        numStack.push(token*1)
    }
    return numStack[0]
};

console.log(evalRPN(["18"]))