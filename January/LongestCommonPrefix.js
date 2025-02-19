var longestCommonPrefix = function(strs) {
    let flag = true
    let currentLetter = 0
    let result =[]
    while(flag){
        if(currentLetter == strs[0].length){
            flag = false
        }
        for(let i = 0; i<strs.length; i++){
            if(strs[i][currentLetter] != strs[0][currentLetter]){
                return result.join('')
            }
        }
        result.push(strs[0][currentLetter])
        currentLetter++
    }
    return result.join('')
};

/*What can we learn? To begin with, the array needs to be sorted, so that the elemens take positions 
according to their length 

After that, we compare both the first and last word by iterating through the first word's length.
This way, we add every coincidental letter to the result string and break if they don't match anymore.'

*/

var longestCommonPrefix = function(strs) {
    if (!strs.length) return "";
    strs.sort();
    let first = strs[0], last = strs[strs.length - 1], result = "";
    for (let i = 0; i < first.length; i++) {
        if (first[i] === last[i]) {
            result += first[i];
        } else {
            break;
        }
    }
    return result;
};

console.log(longestCommonPrefix([""]))