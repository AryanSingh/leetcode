var canFinish = function(numCourses, prerequisites) {
    let preMap = new Map();
    prerequisites.forEach(item => {
        if(preMap.has(item[0])){
            preMap.set(item[0], [...preMap.get(item[0]), item[1]])
        } else {
            preMap.set(item[0], [item[1]])
        }
    });


    let visiting = new Set();

    const traverseMap  = (course) => {
        if(!preMap.has(course)) return true;
        if(visiting.has(course)) return false;
    
        let preRequisite = preMap.get(course);
        visiting.add(course);
        for(const preReq of preRequisite){
            if(!traverseMap(preReq)) return false;
        }
        visiting.delete(course);
        preMap.delete(course);
        return true
    
    }

    for(let i = 0; i<numCourses; i++){
        let result = traverseMap(i);
        if(!result) return false;
    }
    return true;
};

