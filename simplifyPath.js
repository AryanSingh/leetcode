var simplifyPath = function(path) {
    let stack = [];
    let cur = "";
    (path + "/").split("").forEach(char => {
        if(char === "/" && cur === "."){
            cur = "";
            // console.log("stacck", stack);
        } else if(char === "/" && cur === ".."){
            stack.pop();
            cur = "";
            // console.log("stacck", stack);

        } else if(char === "/"){
            if(cur){
                stack.push(cur);
            }
            cur = ""
            // console.log("stacck", stack);

        } else {
            cur += char;
            // console.log("stacck", stack);

        }
    });
    return "/" + stack.join("/");
};


console.log(simplifyPath("/a/./b/../../c/"));