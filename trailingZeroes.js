var trailingZeroes = function (n) {
    let map = new Map();
    map.set(1, 0);
    
    let fivePowers = (num) => {
        if(map.has(num)) return map.get(num);
        else {
            let val = num%5 ===0 ? fivePowers(num - 1) + (num % Math.pow(5, fivePowers(num - 1) + 1) === 0? 1: 0): 0;
            map.set(num, val);
            return val;
        }
    }
    fivePowers(n);

    return Array.from(map.values()).reduce((acc, val) => acc + val, 0)

};

console.log(trailingZeroes(10));