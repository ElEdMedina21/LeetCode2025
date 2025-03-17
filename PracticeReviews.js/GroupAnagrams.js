var groupAnagrams = function(strs) {
    const sqnce = {}
    for(let i = 0; i < strs.length; i++){
        let code = new Array(26).fill(0)
        for(let j = 0; j < strs[i].length; j++){
            let pos = strs[i].charCodeAt(j)-'a'.charCodeAt(0)
            code[pos] += 1
        }
        sqnce.hasOwnProperty(code) ? sqnce[code].push(strs[i]) : sqnce[code] = [strs[i]] 
    }
    return Object.values(sqnce)
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))