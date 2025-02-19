var isAnagram = function(s, t) {
    if(s.length != t.length) return false
    let letters1 = s.split('').sort().join()
    let letters2 = t.split('').sort().join()
    return letters1 == letters2
};

console.log(isAnagram("anagram","nagaram"))