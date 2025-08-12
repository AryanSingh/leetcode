var snakesAndLadders = function(board) {
    const posMap = new Map();
    let len = board.length;
    let visited = new Map([[1, 0]])
    let queue = [1];
    const arrToMap = (board) => {
        board.reverse().forEach((row, rowIndex) => {
            row.forEach((col, colIndex) => {
                let pos;
                if(rowIndex%2!== 0){
                    pos = rowIndex*len + (len-colIndex)
                }
                else {
                    pos = rowIndex*len + colIndex + 1;
                }
                // console.log("pos", pos);
                posMap.set(pos, col);
            })
        })
    }
    arrToMap(board);
    // return posMap;
    const traverseMap = () => {
        while(queue.length !== 0){
            let elem = queue.shift();
            let moves = visited.get(elem);
            for(let i =1 ; i<=6; i++){
                let newPos = elem + i;
                let val = posMap.get(newPos);
                if(val !== -1){
                    newPos = val;
                }
                // console.log("newpos", newPos);
                if(newPos === len*len){
                    return moves +1;
                } else {
                    if(!visited.has(newPos)){
                        visited.set(newPos, moves+1);
                        queue.push(newPos);
                    }
                }
            }
        }
        return -1;
    }
    return traverseMap();
};



const board = [[-1,-1,-1,46,47,-1,-1,-1],[51,-1,-1,63,-1,31,21,-1],[-1,-1,26,-1,-1,38,-1,-1],[-1,-1,11,-1,14,23,56,57],[11,-1,-1,-1,49,36,-1,48],[-1,-1,-1,33,56,-1,57,21],[-1,-1,-1,-1,-1,-1,2,-1],[-1,-1,-1,8,3,-1,6,56]];
// snakesAndLadders((board));
console.log(snakesAndLadders((board)));
