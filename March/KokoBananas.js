var minEatingSpeed = function(piles, h) {
    let bot = 1; 
    let top = Math.max(...piles);
    let result = top
    while(top >= bot){
        let mid = Math.floor((bot+top)/2)
        let currentHours = 0;
        piles.forEach((pile)=>{
            currentHours += Math.ceil(pile/mid)
        })
        if(currentHours <= h){
            if(mid < result) result = mid;
            top = mid-1
        }
        else{
            bot = mid+1
        }
    }
    return result
};



console.log(minEatingSpeed([312884470],312884469))