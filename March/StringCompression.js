var compress = function(chars) {
    let count = 1
    let nextChar = chars[0]
    let currentIndex = 0
    chars.sort((a,b)=>{a.charCodeAt(0) - b.charCodeAt(0)})
    for(let i = 0; i < chars.length; i++){
        if(!(chars[i+1] == nextChar)){
            chars[currentIndex] = nextChar
            currentIndex++
            nextChar = chars[i+1]
            if(count > 1){
                count.toString().split('').forEach((char)=>{
                    chars[currentIndex] = char
                    currentIndex++
                })
            }
            count = 1
            continue
        }
        count++
    }
    return currentIndex
};

console.log(compress(["a","a","b","b","c","c","c"]))