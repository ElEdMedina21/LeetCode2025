var compress = function(chars) {
    let currentIndex = 0
    let currentChar = chars[0]
    let count = 1
    for(let i = 0; i < chars.length; i++){
        if(chars[i+1] != currentChar){
            chars[currentIndex] = currentChar
            currentIndex++;
            currentChar = chars[i+1]
            if(count > 1){
                count.toString().split('').forEach((char)=>{
                    chars[currentIndex] = char;
                    currentIndex++
                })
                count = 1;
            }
        }else{
            count++
        }
    }
    return currentIndex
};

console.log(compress(["a","a"]))