var gameOfLife = function(board) {
    
    //  0 -> 0 => 0
    //  1 -> 1 => 1
    //  0 -> 1 => 2
    //  1 -> 0 => 3
    const playGame = () => {
        board.forEach((row, rowIndex) => {
            row.forEach((col, colIndex) => {
                let neighbors  = getAllNeighbors(rowIndex, colIndex);
                // console.log("neighbors", neighbors);
                let liveNeigbors = getLiveNeighbors(neighbors);
                let curVal = board[rowIndex][colIndex];
                let newVal;
                if(liveNeigbors<2) {
                    newVal = curVal===0? 0: 3;
                }
                else if((liveNeigbors === 2 || liveNeigbors === 3) && curVal ===1){
                    newVal = curVal===1? 1: 0;
                } else if(liveNeigbors>3){
                    newVal = curVal===1? 3: 0;
                }  else if(liveNeigbors === 3 && curVal === 0){
                    newVal = 2;
                }
                board[rowIndex][colIndex] = newVal;
            });
        })
        board.forEach((row, rowIndex) => {
            row.forEach((col, colIndex) => {
                let val = board[rowIndex][colIndex];
                if(val === 1 || val === 2 ){
                    board[rowIndex][colIndex] = 1;
                } else {
                    board[rowIndex][colIndex] = 0;
                }
            })
        })
    }

    const getLiveNeighbors = (neighbors) => {
        let fil = neighbors.filter(neighbor => {
            let left = neighbor[0];
            let right = neighbor[1];
            return board[left][right]=== 1 || board[left][right]=== 3;
        });
        return fil.length;
    }

    const getAllNeighbors = (i, j) => {
        let res = [];
        let columns = board[0].length;
        let rows = board.length;
        // topLeft, top, topRight
        res.push([i-1, j-1], [i,j-1], [i+1, j-1]);
        //left, right
        res.push([i-1, j], [i+1, j]);
        // bottomLeft, bottom, bottomRight
        res.push([i-1, j+1], [i, j+1], [i+1, j+1]);

        res = res.filter(item => item[0]>=0 && item[1]>=0 && item[0]< rows && item[1]<columns);
        return res;
    }

    playGame();

};
let board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]];
gameOfLife(board);
console.log("board", board);