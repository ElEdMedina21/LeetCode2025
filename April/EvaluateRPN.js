var evalRPN = function(tokens) {
    const numStack = [];
    for(let token of tokens){
        if(isNaN(token)){
            switch(token){
                case "+":
                    numStack.push(numStack.pop()*1+numStack.pop()*1)
                    break
                case "-":
                    var aux = numStack.pop()
                    numStack.push(numStack.pop()-aux)
                    break
                case "*":
                    numStack.push(numStack.pop()*numStack.pop())
                    break
                case "/":
                    var aux = numStack.pop()
                    numStack.push(Math.trunc(numStack.pop()/aux))
                    break
            }
        }
        else{
            numStack.push(token)
        }
    }
    return numStack[0]*1
};

console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))