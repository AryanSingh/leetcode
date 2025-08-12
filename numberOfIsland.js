var numIslands = function(grid) {
    let hashSet = new Set();
    let m = grid.length;
    let n = grid[0].length;
    let result = 0;
    grid.forEach((row, rowIndex) => {
        row.forEach((col, colIndex) => {
            if(!hashSet.has(`${rowIndex},${colIndex}`)){
                if(grid[rowIndex][colIndex] === "1"){
                    result++;
                    dfs(rowIndex, colIndex);
                }
            }
        })
    })

    function dfs (rowIndex, colIndex){
        if(rowIndex< 0 || rowIndex>=m || colIndex<0 || colIndex >= n){
            return 0;
        }
        if(grid[rowIndex][colIndex] === "0" || hashSet.has(`${rowIndex},${colIndex}`)) {
            return 0;
        }
        else {
            hashSet.add(`${rowIndex},${colIndex}`);
            dfs(rowIndex-1, colIndex);
            dfs(rowIndex+1, colIndex);
            dfs(rowIndex, colIndex-1);
            dfs(rowIndex, colIndex+1);
        }
    }
    return result;
};

console.log(numIslands([
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]));