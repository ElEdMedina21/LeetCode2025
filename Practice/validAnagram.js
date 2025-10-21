var isAnagram = function(s, t) {
    if(s.length != t.length) return false
    const sMap = new Map()
    const tMap = new Map()

    for(let sChar of s){
        const charCount = sMap.get(sChar) || 0;
        sMap.set(sChar, charCount + 1)
    }

    for(let tChar of t){
        const charCount = tMap.get(tChar) || 0;
        tMap.set(tChar, charCount + 1)
    }
    
    for(const [sKey, sCount] of sMap.entries()){
        const tCount = tMap.get(sKey)
        if(tCount === undefined || tCount !== sCount){
            return false
        }
    }

    return true
};


console.log(isAnagram("anagram", "nagaram"))