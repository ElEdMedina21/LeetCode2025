var isPalindrome = function(s) {
    s= s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
    let j = s.length-1
    for(let i = 0; i < j; i++){
        if(s[i] != s[j]) return false
        j--
    }
    return true
};

console.log(isPalindrome(" "))