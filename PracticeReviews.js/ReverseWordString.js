var reverseWords = function(s) {
    const words = s.split(' ')
    let result = []
    for(let i = words.length-1; i >= 0; i--){
        words[i] != '' ? result.push(words[i]) : ''
    }
    return result.join(' ')
};

console.log([reverseWords("  hello world  ")])