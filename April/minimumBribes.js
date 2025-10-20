function minimumBribes(q) {
    // Write your code here
    let n = q.length;
    let totalDiff = 0
    for(let i = 0; i < n; i++){
        let dist = q[i] - (i+1)
        if(dist > 0) totalDiff += dist
        if(dist > 2) return 'Too chaotic'
    }
    return totalDiff
}

console.log(minimumBribes([]))