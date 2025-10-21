var groupAnagrams = function(strs) {
    const anagramCodes = new Map()
    for(let word of strs){
        const lowerWord = word.toLowerCase()
        let wordCode = new Array(26).fill(0)
        for(let char of lowerWord){
            const code = char.charCodeAt(0) - 'a'.charCodeAt(0)
            wordCode[code] += 1
        }
        const key = wordCode.join(',')
        const updatedWordsArr = anagramCodes.get(key) || []
        updatedWordsArr.push(word)
        anagramCodes.set(key, updatedWordsArr)
    }
    return [...anagramCodes.values()]
};

console.log(groupAnagrams([""]))