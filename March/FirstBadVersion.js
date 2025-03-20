const isBadVersion = (bad,num)=>{
    if(num >= bad) return true
}

const FirstBadVersion = (bad,n)=>{
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

console.log(FirstBadVersion(4,5))