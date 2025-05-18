var isPalindrome = function(s) {
    let text = s.toLowerCase().replace(/[^0-9a-z]/gi, '')
    for(let i = 0; i < text.length; i++){
        if(text[i] != text[text.length-1-i]){
            return false
        }
    }
    return true
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))