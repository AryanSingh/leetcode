const isValidSudoku = (board) => {
    const rowSets = new Map()
    const colSets = new Map();
    const  squareSets = new Map();

    for(let i = 0; i<9; i++){
        rowSets.set(i, new Set());
        colSets.set(i, new Set())
    }

    for(let i = 0; i<9; i++){
        for(let j = 0; j<9; j++){
            let row = Math.floor(i/3);
            let col = Math.floor(j/3);
            if(!squareSets.has(`${row} ${col}`)) squareSets.set(`${row} ${col}`, new Set());
        }
    }
    let isValid = true;

    for(let row = 0; row<9; row++){
        for(let col = 0; col<9; col++){
            let val = board[row][col];
            if(val === ".") continue;
            let rowSet = rowSets.get(row);
            let colSet = colSets.get(col);
            let squareSet = squareSets.get(`${Math.floor(row/3)} ${Math.floor(col/3)}`);
            if(rowSet.has(val) || colSet.has(val) || squareSet.has(val)) {
                return false;
            }
            rowSet.add(val);
            colSet.add(val);
            squareSet.add(val);
        };
    }
    return isValid;
}
const board = [["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];
console.log(isValidSudoku(board));