// var longestConsecutive = function(nums) {
//     if(nums.length == 0) return 0
//     const sorted = nums.sort((a,b) => a-b);
//     const sequences = {};
//     let addCurrent = false;
//     let currentSequence = []
//     for(let i = 0; i < sorted.length; i++){
//         if(sorted.includes(sorted[i]+1)){
//             if(!addCurrent) addCurrent = true
//             currentSequence.push(sorted[i]);
//             console.log(currentSequence)
//         }else{
//             currentSequence.push(sorted[i]);
//             addCurrent = false
//             sequences[`${currentSequence.length}`] = currentSequence
//             currentSequence = []
//         }
//     }
//     const arrsLength = Math.max(...Object.keys(sequences))
//     return arrsLength
// };

var longestConsecutive = function(nums) {
    if(nums.length == 0) return 0
    const numbersPresent = {}
    nums.forEach((num)=>{
        numbersPresent.hasOwnProperty(`${num}`) ? numbersPresent[`${num}`] += 1 : numbersPresent[`${num}`] = 1;
    })
    const sorted = Object.keys(numbersPresent).sort((a,b)=>a-b);
    const sequencesLength = []
    let currentSequence = []
    let addCurrent = false
    for(let i = 0; i < sorted.length; i++){
        if(numbersPresent.hasOwnProperty([`${sorted[i]*1+1}`])){
            if(!addCurrent) addCurrent = true
            currentSequence.push(sorted[i])
        } else {
            if(addCurrent){
                currentSequence.push(sorted[i])
                addCurrent = false
                sequencesLength.push(currentSequence.length)
                currentSequence = []
                continue
            }
            if(!addCurrent){
                currentSequence.push(sorted[i])
                sequencesLength.push(currentSequence.length)
                currentSequence = []
            }
        }
    }
    return Math.max(...sequencesLength)
};

console.log(longestConsecutive([0]))