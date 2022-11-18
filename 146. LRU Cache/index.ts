//nodes are organized as a double linked list for the insertion,
//and as an hash map for the get method (key pointing to the value of the node)

export class Node{

    constructor(public key:number, public value:number, public prev: Node | null = null, public next: Node | null = null){
        this.key = key;
        this.value = value;

    }
    setPair(key:number, value:number){
        this.key = key;
        this.value = value;
    }
}

//need to keep track of the capacity of the cache
export class LRUCache{
    public cache: Map<number, number>;
    public lr: Node | null; //least recently used node
    public mr: Node | null; //most recently used node
    public size: number;
    constructor(public capacity: number){
        this.capacity = capacity;
        this.size = 0;
        this.cache = new Map();

        this.mr = this.lr = null;
        // this.lr.next = this.mr;
        // this.mr.prev = this.lr;

    }


    put(key: number, value: number): void{

        // this.mr.setPair(key, value);

        if(this.cache.has(key)){
            this.cache.set(key, value);
            console.log(this.lr)
            let curr: Node | null = this.lr;
            
            while(curr != null && curr.key != key){
                curr = curr.next!;
                console.log(curr);
            }

            curr.prev!.next = curr.next;
            curr.next!.prev = curr.prev;

            if(this.lr === curr){

                this.lr = curr.next!
            }

            // 1 <-> 2 <-> 3 <-> 0 -> 1 //start
            // 1 <-> 3 <-> 0 //goal
            
            // 2 <-> 3 <-> 0 -> 1 //start
            // 3 <-> 0 -> 1 //goal

            this.mr = new Node(key, value, this.mr, this.mr.next);
            this.mr.next!.prev = this.mr;

            return;
        }

        if(this.mr === null){
            this.mr = new Node(key, value)
            this.lr = this.mr;
        }

        else{
            this.mr = new Node(key, value, this.mr);
            this.mr.prev!.next = this.mr;
            // this.mr.next!.prev = this.mr;
        }
        
        this.size++;

        if(this.size > this.capacity){

            this.cache.delete(this.lr.key);
            this.lr = this.lr.next!;

            this.size--;
        }
        
        
        this.cache.set(key, value);

        return;

    }
    get(key: number): number{

        if(this.cache.has(key)){
            //update value to most recently used

            this.lr = this.lr.next!;
            this.mr.setPair(key, this.cache.get(key)!)
            return this.cache.get(key)!;
        }
        return -1;
    }
}