var combine = function(n, k) {
    let results = [[]];
    let count=1;
    while(count<=k){
        let temp = [];
        results.forEach(entry => {
            for(let i = entry.length>0? entry[entry.length-1]+1: 1; i<=n; i++){
                temp.push([...entry, i])
            }
        })
        results = temp;
        temp = [];
        count++;
    }
    return results;
};

console.log(combine(4, 2))