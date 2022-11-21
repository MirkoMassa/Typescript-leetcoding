//nodes are organized as a double linked list for the insertion,
//and as an hash map for the get method (key pointing to the value of the node)

export class Node{
    public prev: Node | null;
    public next: Node | null;
    constructor(public key:number, public value:number){
        this.key = key;
        this.value = value;

        this.prev = this.next = null;

    }
    setPair(key:number, value:number){
        this.key = key;
        this.value = value;
    }
}

//need to keep track of the capacity of the cache
export class LRUCache{
    public cache: Map<number, number>;
    public lr: Node; //least recently used node
    public mr: Node; //most recently used node
    public size: number;

    constructor(public capacity: number){
        this.capacity = capacity;
        this.size = 0;
        this.cache = new Map();

        this.lr = this.mr = new Node(-1, 0);
        this.lr.next = this.mr;
        this.mr.prev = this.lr;

    }
    
    put(key: number, value: number): void{

        //0 elements in the cache: lru and mru will point to new key
        if(this.mr.key === -1){

            this.lr.setPair(key, value);
            this.mr.setPair(key, value);

            this.cache.set(key, value);
            this.size++;
            return;
        }  
        
        //***elements in the cache: resetting mru and lru***//

        //existing key: no size increasing, resetting mru
        if(this.cache.has(key)){

            //looking for the key's actual position
            let oldnode: Node = this.lr;
            
            while(oldnode.key != key){
                //loop will break before finding null
                oldnode = oldnode.next!;
            }
            //various position cases
            if(oldnode === this.lr){
                oldnode.next!.prev = null;
            }
            else if(oldnode === this.mr){
                oldnode.prev!.next = null;
            }
            else{
                oldnode.prev!.next = oldnode.next;
                oldnode.next!.prev = oldnode.prev;
            }
            
            this.mr.prev = this.mr;
            this.mr.setPair(key, value);
            
            this.cache.set(key, value);
            return;
        }

        //cache already full
        if(this.size = this.capacity){

            this.cache.delete(this.lr.key);
            this.lr = this.lr.next!;


            this.mr.prev = this.mr;

            this.cache.set(key, value);
            return;
        }

        //capacity 4
        //put 3
        // 3
        //put 2
        // 3 - 2
        //put 5
        // 3 - 2 - 5
        //put 7
        // 3 - 2 - 5 - 7


        //cache still not full
        else{
            if(this.size >=2){
                //current most recent
                const currmr = this.mr;
                currmr.next = new Node(key, value);
                this.mr = currmr.next;
                this.mr.prev = currmr;
            }
            else  this.mr.setPair(key, value);

            this.size++;
            this.cache.set(key, value);
            return;
        }
    }


    get(key: number): number{

        if(this.cache.has(key)){
            //update value to most recently used

            this.lr = this.lr.next!;

            this.mr.setPair(key, this.cache.get(key)!);


            let oldnode: Node = this.lr;
            
            while(oldnode.key != key){
 
                oldnode = oldnode.next!;
            }

            if(oldnode === this.lr){
                oldnode.next!.prev = null;
            }
            else if(oldnode === this.mr){
                oldnode.prev!.next = null;
            }
            else{
                oldnode.prev!.next = oldnode.next;
                oldnode.next!.prev = oldnode.prev;
            }

            return this.cache.get(key)!;
        }
        return -1;
    }
}