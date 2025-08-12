var myPow = function(x, n) {
    if(n===0) return 1;
    if(x===0) return 0;
    if(x===1) return 1;
    if(x===-1)return n%2===0? 1: -1;

    let val = 1;
    let cur = n>0? n: n*-1;

    while(cur){
        // console.log("cur", cur, x, val);
        if(cur%2===1) {
            val = val*x;
            cur--;
        }
        x = x*x;
        // val = val*x;
        cur = Math.floor(cur/2);
    }
    if(n>0) return val;
    else return 1/val;
};

console.log(myPow(2, 3));