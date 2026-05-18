function repeatedString(s, n) {
    // Write your code here
    let substringLength = s.length;
    let aApparitions = 0;
    let totalAs = 0
    let substringRepetitions = Math.trunc(n/substringLength)
    let remainingChars = n%substringLength
    let i = 0

    for(i; i < remainingChars; i++){
        if(s[i] == 'a'){
            aApparitions++
        }
    }

    totalAs = aApparitions

    for(i; i < substringLength; i++){
        if(s[i] == 'a'){
            aApparitions++
        }
    }

    aApparitions *= substringRepetitions
    return totalAs + aApparitions
}

console.log(repeatedString('a', 1000000000000))