var isPerfectSquare = function(num) {
    let bot = 0;
    let top = num;
    let mid;
    while(top >= bot){
        mid = bot + Math.floor((top-bot)/2);
        let square = mid * mid 
        if(square == num) return true
        square > num ? top = mid - 1 : bot = mid + 1  
    }
    return false
};

console.log(isPerfectSquare(14))