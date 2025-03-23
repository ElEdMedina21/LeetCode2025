var compress = function(chars) {
    let currentIndex = 0;
    let iterator = 0;
    let currentChar = chars[0];
    let quantity = 0;
    chars.sort((a,b)=>{a.charCodeAt(0)-b.charCodeAt(0)})
    while(iterator < chars.length){
        while(chars[iterator] == currentChar){
            quantity++
            iterator++
        }
        currentIndex++
        currentChar = chars[iterator]
        if(quantity > 1){
            quantity.toString().split('').forEach((char)=>{
                chars[currentIndex] = char
                currentIndex++
            })
        }
        quantity = 0
        if(chars[iterator] != undefined) chars[currentIndex] = currentChar
    }
    console.log(chars)
    return currentIndex
};

console.log(compress(["a","a","a","b","b","a","a"]))