var reverseWords = function(s) {
    const allWords = s.split(' ')
    let reverseString = []
    for(let i = allWords.length-1; i>=0; i--){
        if(allWords[i] != ''){
            reverseString.push(allWords[i])
        }
    }
    return reverseString.join(' ')
};

console.log(reverseWords("a good   example"))