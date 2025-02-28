var reverseVowels = function(s) {
    const rearrangedS = s.split('')
    const vowels = {
        'a': 1,
        'e': 1,
        'i': 1,
        'o': 1,
        'u': 1
    }
    let j = s.length - 1
    let i = 0
    let pos1 = -1
    let pos2 = -1
    let lowerCaseString = s.toLowerCase()

    while(i < j && j > i){
        if(vowels[`${lowerCaseString[i]}`] == 1){
            pos1 = i
        } else{
            i++
        }
        if(vowels[`${lowerCaseString[j]}`] == 1){
            pos2 = j
        } else{
            j--
        }
        if(pos1 != -1 && pos2 != -1){
            rearrangedS[pos1] = s[pos2]
            rearrangedS[pos2] = s[pos1]
            pos1 = -1
            pos2 = -1
            i++
            j--
        }
    }
    return rearrangedS.join('')
};

console.log(reverseVowels("A man, a plan, a canal: Panama"))