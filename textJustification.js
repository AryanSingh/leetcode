var fullJustify = function(words, maxWidth) {
    let result = [];
    let curLine = "";
    let curCount = 0;
    for(let word of words){
        let len = word.length;
        // console.log("word", word, curCount, len);
        if(curCount + len === maxWidth){
            console.log("word 1", curLine, curLine.length, word);
            curLine += word;
            curCount += len;
        } 
        else if(curCount+len<maxWidth){
            console.log("word 2", curLine, word);

            curLine+= word;
            curCount += word.length;
            if(curCount<maxWidth){
                curLine += " ";
                curCount+= 1;
            } 
           
        } 
        else if(curCount+ len>maxWidth){
            console.log("word 3", curLine, word);
            result.push(curLine);
            if(word.length<maxWidth){
                curCount = len+1;
                curLine = word + " ";
            } else {
                curCount = len;
                curLine = word;
            }
           
        }
    }
    result.push(curLine);

    let newResult = result.map((item, index) => {
        if(index !== result.length-1){
            let newItem = item.trim();
            let spaces = maxWidth-newItem.length;
            let split = newItem.split(" ");
            let slots = newItem.split(" ").length-1;
            while(spaces>0){
                if(slots>0){
                    for(let i = 0; i<slots; i++){
                        if(spaces>0){
                            split[i] += " ";
                            spaces--;
                        } else {
                            break;
                        }
                    }
                } else {
                    console.log("split", split, spaces);
                    for(let i = 0; i< spaces; i++){
                        split[0] += " ";
                    }
                    break;
                }
                
            }
            return split.join(" ");
        } else {
            let diff = maxWidth-item.length;
            if(diff>0){
                for(let i =0; i<diff;i++){
                    item += " ";
                }
            }
            return item;
        }   
    })
    newResult.forEach(item => console.log(item.length))
    return newResult;
};

let words = ["What","must","be","acknowledgment","shall","be"];
let maxWidth = 16;


console.log("fulljustify", fullJustify(words, maxWidth));