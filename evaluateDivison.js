var calcEquation = function(equations, values, queries) {
    let eqMap = createEquationMap(equations, values);
    return queries.map((query) => { 
        let [num, den] = query;
        if(!eqMap.has(num) || !eqMap.has(den)){
            return -1;
        } else {
            let visited = new Set();
            return traverseMap(eqMap, num, den, 1, visited);
        }
    })
};

const traverseMap = (eqMap, num, den, curVal, visited) => {
    if(visited.has(num)) return -1;
    let val = eqMap.get(num);
    visited.add(num);
    if(val.neighbors.has(den)) return curVal* val.neighbors.get(den);
    else {
        for (let [key, value] of val.neighbors.entries()) {
            let result =  traverseMap(eqMap, key, den, curVal*value, visited);
            if(result !== -1) return result;
        }
    }
    return -1;

}



const createEquationMap = (equations, values) => {
    let eqMap = new Map();
    equations.forEach((equation, index) => {
        let [num, den] = equation;
        if(eqMap.has(num)){
            let val = eqMap.get(num); 
            if(!val.neighbors.has(den)){
                val.neighbors.set(den, values[index])
            }   
        } else {
            // eqMap.set(num, new Map([[den, values[index]]])); 
            eqMap.set(num, {visited: false, neighbors: new Map([[den, values[index]]])}); 
        }
        if(eqMap.has(den)){
            let val = eqMap.get(den);
            if(!val.neighbors.has(num)){
                val.neighbors.set(num, 1/values[index])
            }
        } else {
            eqMap.set(den, {visited: false, neighbors: new Map([[num, 1/values[index]]])}); 
        }
    });
    return eqMap; 
}
const equations = [["x1","x2"],["x2","x3"],["x3","x4"],["x4","x5"]];
const values = [3.0,4.0,5.0,6.0];
queries = [["x1","x5"],["x5","x2"],["x2","x4"],["x2","x2"],["x2","x9"],["x9","x9"]];
console.log(calcEquation(equations, values, queries))

