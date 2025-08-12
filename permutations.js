var permute = function(nums) {
    let len = nums.length;
    let results = [new Set()];
    for(let i = 0; i<len; i++){
        let temp = [];

        results.forEach(item => {
            for(let num of nums){
                if(!item.has(num)){
                    temp.push(new Set([...item, num]))
                }
            }
        });


        results = temp;
        // console.log("temp", temp)
        temp = [];
    }
    return results.map(item => Array.from(item));
};

const nums = [1,2,3];
permute(nums);