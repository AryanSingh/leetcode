function maxPoints(points) {
    const n = points.length;
    if(n<=2){
        return n;
    }
    let maxPointsCount = 0; 

    for(let i = 0; i<n; i++){
        const slopes = new Map();
        let duplicates = 1;
        
        for(let j = i+1; j<n; j++){
            let slope;
            if(points[i][0] === points[j][0] && points[i][1] === points[j][1]){
                duplicates++;
                continue;
            }
            let dx = points[j][0] - points[i][0];
            let dy = points[j][1] - points[i][1];
            if(dx === 0){
                slope = Infinity;
            } else{
                slope = dy/dx;
            }
            Math.set(slope, (Math.get(slope) || 0) + 1);

        }
        let currentMax = 0;
        for(const count of slopes.values()){
            currentMax = Math.max(currentMax, count);
        }
        maxPointsCount = Math.max(maxPointsCount, currentMax+ duplicates);
    }
    return maxPointsCount;
};