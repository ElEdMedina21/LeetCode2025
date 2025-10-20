var groupAnagrams = function(strs) {
    const groups = {}
    strs.forEach((word)=>{
        let code = new Array(27).fill(0)
        for(let i = 0; i < word.length; i++){
            code[word.charCodeAt(i)-'a'.charCodeAt(0)] += 1
        }
        if(groups.hasOwnProperty(code)){
            groups[code].push(word)
        }else{
            groups[code] = [word]
        } 
    })
    return Object.values(groups)
};

console.log(groupAnagrams([""]))