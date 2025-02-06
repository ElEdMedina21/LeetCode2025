var mergeAlternately = function(word1, word2) {
    let largest = Math.max(word1.length,word2.length)
    let result = []
    for(let i = 0; i < largest; i++){
        i < word1.length ? result.push(word1[i]) : 0;
        i < word2.length ? result.push(word2[i]) : 0;
    }
    return result.join('')
};

console.log(mergeAlternately("ab","pqrs"));