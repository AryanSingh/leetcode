
var WordDictionary = function() {
    this.root = new TrieNode();
};

var TrieNode = function(){
    this.endOfWord = false;
    this.children = {};
}

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let node = this.root;
    for(let char of word){
        if(!node.children[char]){
           node.children[char] = new TrieNode();
        }
        node = node.children[char]; 
    }
    node.endOfWord = true;

};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    console.log("trie", this.root);
    let searchArr = [];
    let i = 0;
    let node = this.root;
    if(!node) return false;
    while(i<word.length){
        if(searchArr.length>0){
            if(word[i] === "."){
                let newArr = searchArr.map(item => item.children);
                searchArr = newArr;
                i++;
            } else {
                let index = searArr.findIndex(item => item.children[word[i]]);
                if(index>-1){
                    node = searchArr[index].children[word[i]];
                    i++;
                }
            }
        }
        else if(node && node.children[word[i]]){
            i++;
            node = node.children[word[i]]
        } else if(node && word[i] === "."){
            i++;
            searchArr = node.children;
        } else{
            return false;
        }
    }
    return true;
};
