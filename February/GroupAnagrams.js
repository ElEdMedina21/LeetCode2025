// var groupAnagrams = function(strs) {
//     const groups = {}
//     strs.forEach((string)=>{
//         let value = string.split('').sort().join('');
//         if(groups.hasOwnProperty(`${value}`)){
//             groups[`${value}`].push(string)
//         } else{
//             groups[`${value}`] = [string]
//         }
//     })
//     return Object.values(groups)
// };


////////////////// MORE EFFICIENT VERSION ////////////////// 
var groupAnagrams = function(strs) {
    const groups = {}
    strs.forEach((string)=>{
        const letters = {
            a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, 
            k: 0, l: 0, m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, 
            u: 0, v: 0, w: 0, x: 0, y: 0, z: 0
        }
        for(let i = 0; i < string.length; i++){
            letters[`${string[i]}`] += 1
        }
        const code = Object.values(letters).join('#')
        groups.hasOwnProperty(code) ? groups[`${code}`].push(string) : groups[`${code}`] = [string]
    })
    return Object.values(groups)
};

console.log(groupAnagrams(["bdddddddddd","bbbbbbbbbbc"]))