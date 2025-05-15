var isAnagram = function(s, t) {
    if(s.length != t.length) return false
    const sMap = {}
    const tMap = {}
    for(let char of s){
        sMap[char] ? sMap[char] += 1*1 : sMap[char] = 1 
    }
    for(let char of t){
        tMap[char] ? tMap[char] += 1*1 : tMap[char] = 1 
    }
    for(key of Object.keys(sMap)){
        if(!tMap.hasOwnProperty(key)) return false
        if(tMap[key] != sMap[key]) return false
    }
    return true
};

console.log(isAnagram("anagra","nagaram"))