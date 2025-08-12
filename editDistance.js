function minDistance(word1, word2) {
    let cache = Array.from({length: word2.length+1}, () => Array(word1.length+1).fill(0));
    let len1 = word1.length;
    let len2 = word2.length;
    for(let i= 0; i<len2+1; i++){
        cache[i][len1] = len2 - i;
    }
    for(let j= 0; j<len1+1; j++){
        cache[len2][j] = len1 - j;
    }
    for(let i = len2-1; i>=0; i--){
        for(j = len1-1; j>=0; j--){
            if(word1[j] === word2[i]){
                cache[i][j] = cache[i+1][j+1];
            } else {
                cache[i][j] = 1 + Math.min(cache[i+1][j], cache[i][j+1], cache[i+1][j+1])
            }
        }
    }
    return cache[0][0];
};

minDistance("horse", "ros");