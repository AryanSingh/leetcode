var convert = function(s, numRows) {
    let result = [];
    for(let i = 0; i<numRows; i++){
        result.push("")
    }
    let index = 0;
    let step = 1;
    for(let i = 0; i<s.length; i++){
        let char = s[i];
        result[index] += char;
        if(index === 0){
            step = 1;
        } else if(index === numRows-1){
            step = -1;
        }
        index += step;
    }
    return result.join("");
};
const s = "PAYPALISHIRING";
const numRows = 3;
console.log("convert", convert(s, numRows));
//paypalishiring
// 
// p            i           n
// a        l   s       i   g
// y    a       h   r
// p            i