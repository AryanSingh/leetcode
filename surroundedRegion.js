/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  let height = board.length;
  let width = board[0].length;
  let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
  

  function dfs(rowIndex, colIndex) {
    if (
      rowIndex < 0 ||
      rowIndex >= height ||
      colIndex < 0 ||
      colIndex >= width ||
      board[rowIndex][colIndex]!== "0"
    ) {
      return false;
    } else {
        board[rowIndex][colIndex] = "#";
        directions.forEach(direction => {
            dfs(rowIndex+ direction[0], colIndex+ direction[1]);
        })
    }
  }

  for(let i = 0; i<height; i++){
    if(board[i][0] === "0")dfs(i, 0);
    if(board[i][width-1] === "0")dfs(i, width-1);
  }
  for(let j = 0; j<width; j++){
    if(board[0][j] === "0")dfs(0, j);
    if(board[height-1][j] === "0")dfs(height-1, j);
  }

  for(let i = 0; i<height ; i++){
    for(let j=0 ; j<width; j++){
        if(board[i][j] === "0"){
            board[i][j] = "X";
        } else if(board[i][j] === "#"){
            board[i][j] = "0";
        }
    }
  }
};

solve(board);


