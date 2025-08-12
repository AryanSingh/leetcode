
var searchInsert = function(nums, target) {
    return binarySearch(nums, 0, nums.length-1, target)
};

const binarySearch = (nums, start, end, target) => {
    let mid = Math.floor((start+end)/2);
    if(start>end) return;
    if(target< nums[start])return 0;
    if(target>nums[end]) return end;
    if(nums[mid] === target){
        return mid;
    } else if(nums[mid]>target && nums[mid-1]<target){
        return mid;
    }else if(nums[mid] < target && nums[mid+1]>target){
        return mid+1;
    } else if(nums[mid]>target ){
        return binarySearch(nums, start, mid-1, target)
    } else {
        return binarySearch(nums, mid+1, end, target);
    }
}

const nums = [1,3,5,6];
const  target = 7;
console.log(binarySearch(nums, 0, nums.length-1, target));