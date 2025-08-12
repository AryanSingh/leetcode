var evalRPN = function(tokens) {
    let stack = [];
    let operators = new Set(["+", "-", "*", "/"]);
    tokens.forEach(item => {
        if(operators.has(item)){
            let pop1 = stack.pop();
            let pop2 = stack.pop();
            let res;
            if(item === "+"){ res = Number(pop1) + Number(pop2)}
            else if(item === "-"){res = Number(pop2) - Number(pop1)}
            else if(item === "*") {res = Number(pop1) * Number(pop2)}
            else {res =  pop2/pop1 > 0? Math.floor(pop2/pop1): Math.ceil(pop2/pop1)}
            stack.push(res);
        } else {
            stack.push(item);
        }
    })
    return stack[0];
};


let tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"];
console.log(evalRPN(tokens));
