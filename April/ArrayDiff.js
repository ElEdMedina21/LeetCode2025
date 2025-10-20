var findDifference = function(nums1, nums2) {
    let result = [[],[]];
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    set1.forEach((val)=>{
        if(!set2.has(val)){
            result[0].push(val)
        }
    })

    set2.forEach((val)=>{
        if(!set1.has(val)){
            result[1].push(val)
        }
    })

    return result
};

console.log(findDifference([1,2,3,3],[1,1,2,2]))