var combinationSum = function(candidates, target) {
    const res = [];
    const dfs = (i, cur, total) => {
        console.log("i, cur, total", i, cur, total);
        if(total=== target){
            res.push([...cur])
            return;
        }
        if(i>= candidates.length || total > target){
            return;
        }
        cur.push(candidates[i]);
        dfs(i, cur, total+candidates[i]);
        cur.pop();
        dfs(i+1, cur, total);
    }

    dfs(0, [], 0);
    return res;
};


const candidates = [2,3,6,7];
const target = 7
console.log("combinationSum", combinationSum(candidates, target));