const isBadVersion = (bad,n)=>{
    if(n >= bad) return true
}

const FirstBadVersion = (bad)=>{
    let bot = 1;
    let top = n
    let mid;
    while(top > bot){
        mid = bot + Math.floor((top-bot)/2)
        if(isBadVersion(bad,mid)){
            top = mid
        }
        else{
            bot = mid + 1
        }
    }
    return bot
}