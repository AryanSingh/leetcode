var letterCombinations = function(digits) {
    if(digits.length === 0) return [];
    let digStr = digits.split("");
    let map = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    }
    let i = 0;
    let result = [""];
    while(i<digits.length){
        let arr = map[digits[i]];
        let newArr = [];
        arr.forEach(char => {
            for(let j = 0; j<result.length;j++){
                newArr.push(result[j] + char);
            }
        });
        result = newArr;
        i++;
    }
    return result;
};