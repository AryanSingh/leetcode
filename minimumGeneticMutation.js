var minMutation = function(startGene, endGene, bank) {
    let visited = new Map([[startGene, 0]]);
    let queue = [startGene];
    let bankSet = new Set(bank);
    let len = startGene.length;
    let arr = [ "A", "C", "G", "T"];

    while(queue.length>0){
        let item = queue.shift();
        let moves = visited.get(item);
        // console.log("visited" , visited);
        for(let i = 0; i< len; i++){
            for(let char of arr){
                if(item[i] !== char){
                    let newStr = replaceChar(item, i, char);
                    if(bankSet.has(newStr) && !visited.has(newStr)){
                        if(newStr === endGene) return moves+1;
                        visited.set(newStr, moves+1);
                        queue.push(newStr);
                    }
                }
            }
        }
    }
    return -1;
};

function replaceChar(str, index, newChar) {
    if (index < 0 || index >= str.length) {
        return str; // Return original string if index is out of bounds
    }
    return str.substring(0, index) + newChar + str.substring(index + 1);
}


const startGene = "AACCGGTT";
const endGene = "AAACGGTA";
const bank = ["AACCGGTA","AACCGCTA","AAACGGTA"];

console.log(minMutation(startGene, endGene, bank));
