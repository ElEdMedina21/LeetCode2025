function rotLeft(a, d) {
    // Write your code here
    let newPos = new Array(a.length)
    let n = a.length;
    for(let i = 0; i < a.length; i++){
        let pos = i - d
        if(Math.abs(pos) > n){
            while(Math.abs(pos) > n){
                pos += n
            }
        }
        pos < 0 ? pos = n + pos : ''
        newPos[pos] = a[i]
    }
    return newPos
}

console.log(rotLeft([1,2,3,4,5],2))