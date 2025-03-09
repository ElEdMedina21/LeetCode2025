var isSubsequence = function(s, t) {
    let i = 0;
    for(let j = 0; j < t.length; j++){
        if(t[j] == s[i]){
            i++
        }
        if(i == s.length){
            break
        }
    }
    return i == s.length
};

console.log(isSubsequence("axc", "ahbgdc"))