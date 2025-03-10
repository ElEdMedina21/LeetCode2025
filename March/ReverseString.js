var reverseString = function(s) {
    j = s.length-1;
    for(let i = 0; i < j; i++){
        let temp = s[i]
        s[i] = s[j]
        s[j] = temp
        j--
    }
    return s
};

console.log(reverseString(["h","e","l","l","o"]))