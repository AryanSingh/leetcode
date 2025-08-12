var generateParenthesis = function(n) {
    let result = [];
    const dfs = (cur, left, right) => {
        if(cur.length ===n*2){
            result.push(cur);
            return;
        }
        if(left<n) dfs(cur+"(", left+1, right);
        // cur.pop();
        if(right<left)dfs(cur+")", left, right+1);

    }
    dfs("", 0, 0);
    return result;
};

console.log(generateParenthesis(3));