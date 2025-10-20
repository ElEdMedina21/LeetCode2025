var lengthOfLongestSubstring = function(s) {
    let longestSubString = 0;
    for(let i = 0; i < s.length; i++){
        let currentString = s[i]
        for(let j = i+1; j < s.length; j++){
            if(currentString.includes(s[j])){
                i = s.indexOf(s[j],i)
                break
            }
            currentString += s[j]
        }
        longestSubString = Math.max(longestSubString, currentString.length)
    }
    return longestSubString
};

console.log(lengthOfLongestSubstring("pwwkew"))


var lengthOfLongestSubstring = function(s) {
    let longestSubString = 0
    let currentString = new Set()
    let l = 0

    for(let r = 0; r < s.length; r++){
        while(currentString.has(s[r])){
            currentString.delete(s[l])
            l++
        }
        currentString.add(s[r])
        longestSubString = Math.max(longestSubString, r-l+1)
    }
    return longestSubString
};