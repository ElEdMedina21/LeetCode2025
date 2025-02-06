var isSubsequence = function(s, t) {
    let currentIndex = 0
    for(let i = 0; i < s.length; i++){
        let letterIndex = t.indexOf(s[i],currentIndex);
        if(letterIndex === -1) return false
        currentIndex = letterIndex+1;
    }
    return true
};

console.log(isSubsequence("bb","ahbgdc"))