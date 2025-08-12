var findOrder = function(numCourses, prerequisites) {
    let visited = new Set();
    let cycle = new Set();
    let preMap = new Map();
    let answers = [];
    for(let i = 0; i< numCourses; i++){
        preMap.set(i, []);
    }
    prerequisites.map(item => {
        let [course, preReq] = item;
        preMap.get(course).push(preReq);
    })
    console.log("premmap", preMap);


    const traverseCourse = (course) => {
        console.log("course", course, visited);
        if(cycle.has(course)) return false;
        if(visited.has(course)) return true;
        console.log("course", course, visited);

        cycle.add(course);
        visited.add(course);
        for(let item of preMap.get(course)){

            if(traverseCourse(+item) ===false) return false;
        }
        cycle.delete(course);
        answers.push(course);
        return true;
    }

    for(let i = 0; i<numCourses; i++){
        if(!traverseCourse(i)) return [];
    }
    return answers;

};

// const numCourses = 4;
// const prerequisites = [[1,0],[2,0],[3,1],[3,2]];
const numCourses = 2;
const prerequisites = [[0,1]];

console.log("findOrder", findOrder(numCourses, prerequisites));