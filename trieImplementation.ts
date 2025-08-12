class TrieNodeClass{
    children: Map<string, TrieNodeClass>;
    isEnd: boolean;
    constructor(){
        this.children = new Map();
        this.isEnd = false;
    }
}

class TrieClass{
    head: TrieNodeClass;
    constructor(){
        this.head = new TrieNodeClass();
    }
    insert(word: string): void{
        let current = this.head;
        for(let i = 0; i<word.length; i++){
            if(!current?.children.has(word[i])){
                current.children.set(word[i], new TrieNodeClass());
            }
            current = current.children.get(word[i])!;
        }
        current.isEnd = true;
        
    }

    search(word: string): boolean{
        let current = this.head;
        for(let char of word){
            if(current.children.has(char)){
                current = current.children.get(char)!;
            } else {
                return false;
            }
        }
        return current.isEnd;

    }
    startsWith(prefix: string): boolean{
        let current = this.head;
        for(let char of prefix){
            if(current.children.has(char)){
                current = current.children.get(char)!;
            } else {
                return false;
            }
        }
        return true;

    }
}
let trie = new TrieClass();
console.log(trie.insert("apple"));
console.log(trie.search("apple"));
console.log(trie.search("app"));
console.log(trie.startsWith("app"));
// ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
// [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]