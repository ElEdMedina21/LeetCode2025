var isValid = function(s) {
    const neededClosure = []

    for(let char of s){
        switch (char) {
            case '(':
                neededClosure.push(")")
                break;
            case '[':
                neededClosure.push("]")
                break;
            case '{':
                neededClosure.push("}")
                break;
            default:
                if(neededClosure[neededClosure.length-1] !== char){
                    return false
                }
                neededClosure.pop()
                break;
        }
    }
    return neededClosure.length == 0
};

console.log(isValid("([)]"))