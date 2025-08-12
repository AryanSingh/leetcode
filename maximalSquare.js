function maximalSquare(matrix ) {
    let height = matrix.length;
    let width = matrix[0].length;
    let cache = Array.from({length: height}, () => Array(width).fill(0));
    for(let i = 0; i<height; i++){
        cache[i][width-1] = Number(matrix[i][width-1]);
    }
    for(let j = 0; j<width; j++){
        cache[height-1][j] = Number(matrix[height-1][j]);
    }
    for(let i = height-1; i--; i>=0){
        for(let j = width-1; j--; j>=0){
            if(matrix[i][j] === "0"){
                cache[i][j] = 0;
            } else {
                cache[i][j] = 1 + Math.min(cache[i+1][j], cache[i][j+1], cache[i+1][j+1]);
            }
        }
    };
    let max = 0;
    for(let i = 0; i<height; i++){
        for(let j = 0; j<width; j++){
            if(cache[i][j]> max){
                max = cache[i][j];
            }
        }
    }
    return max*max;
};


let matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]];
maximalSquare(matrix);