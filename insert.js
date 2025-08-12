var insert = function(intervals, newInterval) {
    if(intervals.length === 0) return [newInterval];
    let [start,end] = newInterval;
    let startIndex = intervals.findIndex(interval => {
        return (start>=interval[0] && start<=interval[1]);
    });
    let endIndex = intervals.findIndex(interval => {
        return (end>=interval[0] && end<=interval[1]);
    });
    console.log("startindex, endIndex", startIndex, endIndex);
    const combineIntervals = (interval1, interval2) => {
        return ([Math.min(interval1[0], interval2[0]), Math.max(interval1[1], interval2[1])]);
    }
    const mergeIntoInterval = (interval, value) => {
        interval[0] = Math.min(interval[0], value);
        interval[1] = Math.max(interval[1], value);
    }
    if(startIndex === endIndex && startIndex !== -1){
        intervals[startIndex] = combineIntervals(intervals[startIndex], newInterval);
    } else if(startIndex>=0 && endIndex>=0){
        console.log("here1")
        let mergedInterval = combineIntervals(intervals[startIndex], intervals[endIndex]);
        intervals.splice(startIndex, endIndex-startIndex+1,mergedInterval );
       
    } else if(startIndex===-1 && endIndex>0){
        console.log('ehere2')
        let index = 0 || intervals.findIndex(interval => start<interval[0]);mergeIntoInterval(intervals[index], start);
        mergeIntoInterval(intervals[endIndex], end);
        intervals.splice(index, endIndex-index);
    } else if(startIndex>=0 && endIndex===-1){
        console.log("here3")
        let index = 0 || intervals.findIndex(interval => end>interval[1]);
        mergeIntoInterval(intervals[startIndex], start);
        mergeIntoInterval(intervals[index],end );
        intervals.splice(startIndex+1, index-startIndex);
    } else {
        console.log("here5")
        let startIndex = intervals.findIndex(interval => start < interval[0]) >-1? intervals.findIndex(interval => start < interval[0]): intervals.length;
        let endIndex = intervals.findIndex(interval => end<interval[1])>-1? intervals.findIndex(interval => end<interval[1]): intervals.length;
        if(endIndex-startIndex>0){
            intervals.splice(startIndex, endIndex-startIndex, newInterval)
        } else {
            intervals[startIndex] = newInterval;
        }
    }
    return intervals;   

};




// const intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]];
// const newInterval = [4,8];
// const Output: [[1,2],[3,10],[12,16]];

// const intervals = [[1,3],[6,9]];
// const  newInterval = [2,5];
//[[1, 5], [6, 9]]

const intervals = [[1,5]];
const newInterval = [6, 8];

console.log(insert(intervals, newInterval));

// both start and end contained in an interval => no change in input 
// start is one interval and end is in another => two enclosing intervals combine to form a new interval
// start lies outside interval, end lies in an interval => new interval is formed with [start, enclosingEnd], interval between get deleted
// start lies in interval, end lies outside => new interval with [enclosingStart, end] => interval between get deleted
// start and end lie outside interval => new interval added with [start, end]