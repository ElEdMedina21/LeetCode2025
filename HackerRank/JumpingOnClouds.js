function jumpingOnClouds(c) {
    // Write your code here
    let currentIndex = 0;
    let totalJumps = 0;

    while(currentIndex != c.length-1){
        if(c[currentIndex + 2] !=1 && currentIndex + 2 <= c.length-1){
            currentIndex += 2
            totalJumps++
        }
        else{
            totalJumps++
            currentIndex++
        }
    }

    return totalJumps
}

console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0]))