var trap = function(height) {
    let maxArr = []
    for(let i = 0; i< height.length; i++){
        if(i === 0 && height[i] >= height[i+1]){
            maxArr[i] = {localMax: true, height: height[i]}
        }
        else if(i === height.length -1 && height[i]>= height[i-1]){
            maxArr[i] = {localMax: true, height: height[i]}
        }
        else if(height[i]>= height[i-1] && height[i]>= height[i+1]){
            maxArr[i] = {localMax: true, height: height[i]}
        } else {
            maxArr[i] = {localMax: false, height: height[i]}
        }
    }
    let prevMax = -1;
    maxArr.forEach((item, index) => {
        if(item.localMax && height[index] > prevMax){
            prevMax = height[index];
        }
        item.prevMax = prevMax;
    });
    let nextMax = -1;
    for(let i = height.length -1; i>=0; i--){
        let item = maxArr[i];
        if(item.localMax && height[i]> nextMax){
            nextMax = height[i];
        }
        item.nextMax = nextMax;
    }
    // console.log("maxArr", maxArr);

    let total = 0;
    maxArr.forEach((item, index) => {
        let maxMin = Math.min(item.prevMax, item.nextMax);
        if( maxMin !== -1 && maxMin>item.height){
            total += Math.min(item.prevMax, item.nextMax) -item.height;
        }
    })
    return total;
};

console.log(trap([9,6,8,8,5,6,3]));