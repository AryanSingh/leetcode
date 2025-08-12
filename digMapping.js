var letterCombinations = function(digits) {
    let digMapping = new Map([["2", ["a", "b", "c"]],
        ["3", ["d", "e", "f"]],
        ["4", ["g", "h", "i"]],
        ["5", ["j", "k", "l"]],
        ["6", ["m", "n", "o"]],
        ["7", ["p", "q", "r", "s"]],
        ["8", ["t", "u", "v"]],
        ["9", ["w", "x", "y", "z"]]])
    let num = String(digits);
    let results = [];
    num.split("").map(char => {
        let val = digMapping.get(char);
        let temp = [];
        val.forEach(item => {
            if(results.length === 0){
               temp.push(item);
            } else {
                results.forEach(str => temp.push(str + item));
            }

        });
        results = temp;
        temp = [];
    })
    return results;
};


console.log("lettercombinations", letterCombinations(234));