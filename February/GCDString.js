var gcdOfStrings = function(str1, str2) {
    let gcd = Math.min(str1.length,str2.length)
    while(gcd > 0){
        if(str1.length % gcd == 0 && str2.length % gcd == 0) break;
        gcd --
    }
    let substring = str1.substring(0,gcd)
    for(let i = 0; i<str1.length; i+=gcd){
        if(str1.substring(i,i+gcd) != substring) return "" 
    }
    for(let i = 0; i<str2.length; i+=gcd){
        if(str2.substring(i,i+gcd) != substring) return ""
    }
    return substring
};

console.log(gcdOfStrings("LEET", "CODE"))