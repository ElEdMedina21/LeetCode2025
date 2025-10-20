var closeStrings = function(word1, word2) {
    if(word1.length != word2.length) return false

    let wordCode1 = {}
    let wordCode2 = {}

    for(let i = 0; i < word1.length; i++){
        if(wordCode1.hasOwnProperty(word1[i])){
            wordCode1[word1[i]] += 1
        }else{
            wordCode1[word1[i]] = 1
        }
    }

    for(let i = 0; i < word2.length; i++){
        if(wordCode2.hasOwnProperty(word2[i])){
            wordCode2[word2[i]] += 1
        }else{
            wordCode2[word2[i]] = 1
        }
    }

    let word1Keys = Object.keys(wordCode1)
    let word2Keys = Object.keys(wordCode2)

    for(let i = 0; i < word1Keys.length; i++){
        if(!wordCode2.hasOwnProperty(word1Keys[i])){
            return false
        }
    }
    for(let i = 0; i < word2Keys.length; i++){
        if(!wordCode1.hasOwnProperty(word2Keys[i])){
            return false
        }
    }
    
    let word1Values = Object.values(wordCode1)
    let word2Values = Object.values(wordCode2)

    word1Values.sort((a,b)=>a-b)
    word2Values.sort((a,b)=>a-b)


    return (word1Values.join('') == word2Values.join(''))
};

console.log(closeStrings("abc", "bca"))