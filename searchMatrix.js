var searchMatrix = function(matrix, target) {
    let m = matrix[0].length;
    let n = matrix.length;

    let binarySearch = (matrix, left, right, number) => {
        // console.log("left", left, "right", right);
        if(left > right) return -1;
        let mid = Math.floor((left+right)/2);
        if(getMatrixElement(matrix, mid, m, n) === number) return mid;
        else if(getMatrixElement(matrix, mid, m, n) < number){
            return binarySearch(matrix, mid+1, right, number);
        } else {
            return binarySearch(matrix, left, mid-1, number);
        }
    }
    let foundIndex =  binarySearch(matrix, 0, m*n-1, target);
    if(foundIndex === -1) return false;
    else return true;
};  


const getMatrixElement = (matrix, index, m, n) => {
    let row = Math.floor(index/m);
    let col = index%m;
    return matrix[row][col];
}

const matrix = [[1],[3]];
const target = 3;
console.log("searchmatrix", searchMatrix(matrix, target)); // false