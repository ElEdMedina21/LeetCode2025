function countingValleys(steps, path) {
    // Write your code here
    let currentHeight = 0;
    let totalValleys = 0;
    let totalMountains = 0;

    for(let step = 0; step < steps; step++){
        console.log(currentHeight)
        switch (path[step]) {
            case 'U':
                if(currentHeight == 0){
                    totalMountains++
                }
                currentHeight++
                break;

            case 'D':
                if(currentHeight == 0){
                    totalValleys++
                }
                currentHeight--
                break;
        }
    }
    return totalValleys
}

console.log(countingValleys(8, 'DDUUUUDD'))