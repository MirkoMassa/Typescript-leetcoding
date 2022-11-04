export class node {

    public prev:node | null;
    public next:node | null;

    constructor(public data:number){
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

export class list {
    constructor(public head:node | null = null){}

    add(data:number):void {

        if(this.head === null){
            this.head = new node(data);
            return;
        }

        let currnode = this.head;
        while (currnode.next){
            currnode.next.prev = currnode;
            currnode = currnode.next;
        }
        currnode.next = new node(data);
        return;
    }
    pop(data:number):void {
        if(this.head === null){
            console.log("The list is empty.")
            return;
        }
        let currnode = this.head;

        while (currnode.next){
            if(currnode.next.next === null){
                currnode.next = null;
                return;
            }
        }
        
    }



}