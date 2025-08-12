var merge = function(intervals) {
    let len = intervals.length;
    let sorted = [...intervals];
    sorted.sort((a, b) => a[0] - b[0] );
    if(intervals.length<2) return intervals;
    let res = [];
    let i = 0;
    let j = 1;
    while(i<len && j<len){
        if(sorted[j][0]> sorted[i][1]){
            res.push(sorted[i]);
            i++;
            j++;
        } else {
            if(sorted[j][0]<= sorted[i][1]){
                sorted[j][0] = sorted[i][0];
                if(sorted[i][1]> sorted[j][1]){
                    sorted[j][1] = sorted[i][1];
                }
                i++;
                j++;
            }

        }
    }
    res.push(sorted[i]);
    // console.log("res", res, sorted);
    return res;

};
console.log(merge([[18,3],[12,6],[8,10],[15,18]]));
