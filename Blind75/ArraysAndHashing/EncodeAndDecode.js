function encode(strs){
    let result = ''
    for(let word of strs){
        result += `${word.length}#${word}`
    }
    return result
}

// function decode(strs){
//     let result = []
//     for(let i = 0; i < strs.length; i++){
//         if(strs[i] == '#' && !isNaN(strs[i-1])){
//             let j = i+1
//             let count = strs[i-1]*1
//             let word = ''
//             for(j; j <= i+count; j++){
//                 console.log(strs[j])
//                 word+=strs[j]
//             }
//             i = j
//             result.push(word)
//         }
//     }
//     return result
// }

function decode(str){
    let result = []
    let i = 0
    while(i < str.length){
        let j = i
        while(str[j] !== '#'){
            j++
        }
        let length = str.substring(i,j)*1
        i = j + 1
        j = i + length
        result.push(str.substring(i,j))
        i = j
    }
    return result
}

console.log(encode(["we","say",":","yes","!@#$%^&*()"]))
let codedMessage = '2#we3#say1#:3#yes10#!@#$%^&*()'
console.log(decode(codedMessage))