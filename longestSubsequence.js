var longestConsecutive = function(nums) {
    let map = new Map();
    let largest = Number.NEGATIVE_INFINITY;
    let smallest = Number.POSITIVE_INFINITY;
    nums.forEach((num, index) => {
        if(!map.has(num)){
            map.set(num, index);
        }
        if(num>largest) largest = num;
        if(num<smallest) smallest = num;
    });
    let count =0;
    let max = 0;
    let current = largest;
    while(current>=smallest){
        if(map.has(current)){
            count++; 
            current--
        } else {
            count = 0;
            current--;
        }
        
        if(count>max) max = count;
    }
    // console.log("max", max)
    return max;
};
let nums = [100,4,200,1,3,2];
// let nums = [0,3,7,2,5,8,4,6,0,1];
// let nums = [1,0,1,2];
console.log(longestConsecutive(nums));