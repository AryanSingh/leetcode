
const sum = (a, b) => a+b;
const mul = (a, b) => a*b;
const div = (a, b) => a/b;
const sub = (a, b) => a-b;
var calculate = function(s) {
    let stack = [];
    let result = 0;
    let operMap = new Map {
        "+": sum,
        "*": mul,
        "/": div,
        "-": sub
    }

    s.forEach()
};

const s = "(1+(4+5+2)-3)+(6+8)"
// Output: 23
