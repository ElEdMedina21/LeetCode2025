// var groupAnagrams = function(strs) {
//     const groups = {}
//     strs.forEach((string)=>{
//         let charCode = 0
//         for(let i = 0; i < string.length; i++){
//             charCode += string.charCodeAt(i)
//         }
//         if(groups.hasOwnProperty(`${charCode}`)){
//             groups[`${charCode}`].push(string)
//         } else {
//             groups[`${charCode}`] = [string]
//         }
//     })
//     return Object.values(groups)
// };

var groupAnagrams = function(strs) {
    const groups = {}
    strs.forEach((string)=>{
        let value = string.split('').sort().join('');
        if(groups.hasOwnProperty(`${value}`)){
            groups[`${value}`].push(string)
        } else{
            groups[`${value}`] = [string]
        }
    })
    return Object.values(groups)
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))