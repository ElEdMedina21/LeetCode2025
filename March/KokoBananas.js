var minEatingSpeed = function(piles, h) {
    let bot = 1; 
    let top = Math.max(...piles);
    let result = top;

    while (bot <= top) {
        const mid = Math.floor((bot + top) / 2);
        let currentHours = 0;
        
        for (const pile of piles) {
            currentHours += Math.ceil(pile / mid);
            if (currentHours > h) break;
        }
        if (currentHours <= h) {
            result = mid;
            top = mid - 1;
        } else {
            bot = mid + 1;
        }
    }
    return result;
};
