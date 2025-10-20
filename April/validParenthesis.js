// var isValid = function(s) {
//     let openings = ["(","[","{"];
//     let endings = [")","]","}"];
//     let parenthesisStack = []

//     for(let char of s){
//         if(openings.includes(char)) {
//             parenthesisStack.push(openings.indexOf(char))
//         }
//         else if(endings.includes(char)){
//             if(endings.indexOf(char) != parenthesisStack.pop()){
//                 return false
//             }
//         }
//     }
//     if(parenthesisStack.length == 0) return true
//     else return false
// };


var isValid = (s)=>{
    let parenthesesPairs = new Map()
    parenthesesPairs.set("}","{")
    parenthesesPairs.set(")","(")
    parenthesesPairs.set("]","[")
    let parenthesesStack = []
    for(let char of s){
        if(parenthesesPairs.has(char)){
            if(parenthesesPairs.get(char) != parenthesesStack.pop()) return false
        }
        else{
            parenthesesStack.push(char)
        }
    }
    if(parenthesesStack.length > 0) return false
    return true
}

console.log(isValid("()[]{}"))