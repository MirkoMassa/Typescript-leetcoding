//min heap (the root is the minimum value)

export class node{

    public left:node | null;
    public right:node | null;
    constructor(public data:number) {
        this.data = data;
        this.left = null;
        this.right = null;

    }

    print(){

        let left: string = this.left !== null ? this.left.print() : " " ;
        let right: string = this.right ? this.right.print() : " " ;
        return `[ ${left} . ${this.data} . ${right} ]`;
    }

}

export class heap{

    constructor(public root:node | null = null){}

    add(data: number){

        if(this.root === null){
            this.root = new node(data);
            return;
        }

        check(this.root);

        function check(currnode:node){

            if(currnode.left){
                
                if(currnode.right){
                    //left&right exists
                    currnode = 
                }
                //right = null


            }


        }
        


    }


}