var romanToInt = function(s) {
    let romans = {
        'I':1
        ,'V':5
        ,'X':10
        ,'L':50
        ,'C':100
        ,'D':500
        ,'M':1000
    }
    let keys = Object.keys(romans);
    let result = 0;
    for(let i=0; i < s.length; i++){
        keys.indexOf(s[i]) < keys.indexOf(s[i+1]) ?  
        result -= romans[`${s[i]}`] : 
        result += romans[`${s[i]}`]
    }
    return result
};
console.log(romanToInt('MCMXCIV'))