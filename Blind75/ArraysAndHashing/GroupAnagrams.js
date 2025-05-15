var groupAnagrams = function(strs) {
    const wordCodes = new Map()
    for(let word of strs){
        let code = new Array(27).fill(0) 
        for(let char of word){
            code[char.charCodeAt(0)-'a'.charCodeAt(0)] += 1
        }
        let codeString = code.join()
        if(wordCodes.has(codeString)){
            let currentVal = wordCodes.get(codeString)
            currentVal.push(word)
            wordCodes.set(codeString, currentVal)
        }
        else{
            wordCodes.set(codeString,[word])
        }
    }
    return [...wordCodes.values()]
};

console.log(groupAnagrams(["a"]))