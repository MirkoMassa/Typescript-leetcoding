//nodes are organized as a double linked list for the insertion,
//and as an hash map for the get method (key pointing to the value of the node)

//***Tried using an array***

//need to keep track of the capacity of the cache
export class LRUCache{
    public cache: Map<number, number>;
    public nodes: number[];

    constructor(public capacity: number){
        this.capacity = capacity;
        this.cache = new Map();

        this.nodes = new Array();

    }
    
    put(key: number, value: number): void{

        //0 elements in the cache
        if(this.nodes[0] === undefined){

            this.nodes[0] = key;
            this.cache.set(key, value);
            return;
        }  
        
        //***elements in the cache***//

        //existing key: no size increasing, resetting mru
        if(this.cache.has(key)){

            //removing the key from the array and putting it at the end

            this.nodes.splice(this.nodes.indexOf(key), 1);
            this.nodes.push(key);
            
            this.cache.set(key, value);
            return;
        }

        //cache already full
        if(this.nodes.length === this.capacity){

            this.cache.delete(this.nodes[0]);
            this.nodes.shift();

            this.cache.set(key, value);
            this.nodes.push(key);
            return;
        }

        //cache still not full
        else{
            
            this.nodes.push(key);
            this.cache.set(key, value);
            return;
        }
    }


    get(key: number): number{

        if(this.cache.has(key)){

            this.nodes.splice(this.nodes.indexOf(key), 1);
            this.nodes.push(key);

            return this.cache.get(key)!;
        }
        return -1;
    }
}