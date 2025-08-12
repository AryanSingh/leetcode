
// let Trie = function() {
//     this.root = new TrieNode();
// };
// let TrieNode = function(char){
//     this.endOfWord = false;
//     this.children = {};
// }
// /** 
//  * @param {string} word
//  * @return {void}
//  */
// Trie.prototype.insert = function(word) {
//     let node = this.root;
//     for(let char of word){
//         if(!node.children[char]){
//             node.children[char] = new TrieNode();
//         }
//         node = node.children[char];
//     }
//     node.endOfWord = true;
// };

// /** 
//  * @param {string} word
//  * @return {boolean}
//  */
// Trie.prototype.search = function(word) {
//     let i = 0;
//     let node = this.root;
//     while(i<word.length){
//         if(node.children[word[i]]){
//             node = node.children[word[i]];
//             i++;
//         } else {
//             return false;
//         }
//     }
//     if(node.endOfWord === true) return true;
//     return false;
// };

// /** 
//  * @param {string} prefix
//  * @return {boolean}
//  */
// Trie.prototype.startsWith = function(word) {
//     let i = 0;
//     let node = this.root;
//     while(i<word.length){
//         if(node.children[word[i]]){
//             node = node.children[word[i]];
//             i++;
//         } else {
//             return false;
//         }
//     }
//     return true;
    
// };

// Trie.prototype.getAllWords = function(node= this.root, currentWord="", allWords = []){
//     let keys = Object.keys(node.children);
//     for(let key of keys){
//         this.getAllWords(node.children[key], currentWord+key, allWords)
//     }
//     if(node.endOfWord){
//         allWords.push(currentWord);
//     }
//     return allWords;
// }

// Trie.prototype.getWordsStartingWith = function(search){
//     let i = 0;
//     let node= this.root;
//     while(i<search.length){
//         if(node.children[search[i]]){            
//             node = node.children[search[i]]
//             i++;
//         } else{
//             break;
//         }
//     }
//     // console.log("i", i);
//     if(i === search.length){
//         return this.getAllWords(node, search, []);
//     } else {
//         return [];
//     }
// }

// // Trie.prototype.getWordsStartingWith = function(prefix) {
// //     let node = this.root;
    
// //     for (let char of prefix) {
// //         if (!node.children[char]) {
// //             return []; // prefix not found
// //         }
// //         node = node.children[char];
// //     }
    
// //     return this.getAllWords(node, prefix, []);
// // };

// /** 
//  * Your Trie object will be instantiated and called as such:
//  * var obj = new Trie()
//  * obj.insert(word)
//  * var param_2 = obj.search(word)
//  * var param_3 = obj.startsWith(prefix)
//  */

// let trie = new Trie();
// trie.insert("apple");
// // console.log(trie.search("apple"));   // return True
// // console.log(trie.search("app"));     // return False
// trie.startsWith("app"); // return True
// trie.insert("app");
// trie.insert("mango");
// trie.insert("man");
// trie.insert("here");
// trie.insert("maneater");
// trie.insert("menopause");
// trie.insert("mandate");
// trie.insert("manhandle");
// // console.log(trie.search("app"));   
// // console.log(trie.getAllWords());
// // console.log(trie.root);
// console.log(trie.getWordsStartingWith("man").sort().slice(0, 3));