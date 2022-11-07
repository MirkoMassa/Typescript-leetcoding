export class Treenode{

    public left:Treenode | null;
    public right:Treenode | null;
    public parent:Treenode | null;
    constructor(public data:number) {
        this.data = data;
        this.parent = null;
        this.left = null;
        this.right = null;

    }

    print(){

        let left: string = this.left !== null ? this.left.print() : " " ;
        //statement equivalent to ternary operator
        // if(this.left !== null) {
        //     left = this.left.print();
        // }else{
        //     left = " ";
        // }
        let right: string = this.right ? this.right.print() : " " ;
        return `[ ${left} . ${this.data} . ${right} ]`;
    }
    // traversal, preorder, inorder, and postorder
    //max, min, successor (next element greater than some X), predecessor, height, searching/find an element
    //balancing trees
    //bad behavior if you add elements already sorted [1,2,3,4,5,6]
    //balancing bsts are red-black trees and AVL trees
    
}

export class bst{
    constructor(public root:null | Treenode = null){}

    add(data: number):void{
        if(this.root === null){
            this.root = new Treenode(data);
            return;
        }

        else {

            let child = new Treenode(data);

            let currnode:Treenode | null = this.root;
            let parentnode:Treenode | null = null;

            while(currnode !== null){

                parentnode = currnode;
                if(data < currnode.data){
                    currnode = currnode.left;
                } else {
                    currnode = currnode.right;
                }

            }

            if(data < parentnode!.data){
                parentnode!.left = child;

            } else {
                parentnode!.right = child;

            }
            child.parent = parentnode;
            return;

        //     nullNode(this.root);

        //     function nullNode(currnode: Treenode):void{

        //         if(data < currnode.data){
        //             if(currnode.left === null){
        //                 currnode.left = new Treenode(data);
        //                 return;
        //             }
        //             else if(currnode.left !== null){
        //                 nullNode(currnode.left);
        //             }

        //         }
        //         else if(data >= currnode.data){
        //             if(currnode.right === null){
        //                 currnode.right = new Treenode(data);
        //                 return;
        //             }
        //             else if (currnode.right !== null){
        //                 nullNode(currnode.right);
        //             }  
        //         }
        //     }
            
        }

    }

    findmin(): Treenode | null{

        if(this.root === null){
            return null;
        }
        let currnode = this.root;

        while(currnode.left !== null){
            currnode = currnode.left;
        }
        
        return currnode;
    }
    findmax(): Treenode | null{

        if(this.root === null){
            return null;
        }
        let currnode = this.root;

        while(currnode.right !== null){
            currnode = currnode.right;
        }
        
        return currnode;
    }
    print(): string {
        if(this.root !== null){
            return this.root.print();
        }
        return "[]"
        

    }
    search(data:number, node:Treenode | null = this.root):Treenode | null{

        if(node === null){
            console.log("the list is empty.");
            return null;
        }
        if(node.data === data){
            console.log("the key is in the root.");
            return this.root;
        }
        if(data < node.data){
            return this.search(data, node.left);
            
        }
        else{
            return this.search(data, node.right);

        }
    }
    searchIterative(data: number): Treenode | null{
        let currnode = this.root;
        if(currnode!.data === data){
            console.log("the key is in the root.");
            return currnode;
        }
        while(currnode !== null){
            if(data < currnode!.data){
                currnode = currnode!.left;
            }
            else if(data > currnode!.data){
                currnode = currnode!.right;
            }
            else{
                return currnode;
            }
        }
        console.log("the list is empty.");
        return null;
    }

    preorder(node: Treenode | null = this.root, visitorFn:(node: Treenode | null)=>void):void{
        visitorFn(node);
        if(node){
            this.preorder(node.left, visitorFn);
            this.preorder(node.right, visitorFn);
        }

    }
    inorder(node: Treenode | null = this.root, visitorFn:(node: Treenode | null)=>void):void{
        
        if(node){
            this.inorder(node.left, visitorFn);
        }
        visitorFn(node);

        if(node){
            this.inorder(node.right, visitorFn);
        }

    }
    postorder(node: Treenode | null = this.root, visitorFn:(node: Treenode | null)=>void):void{
        if(node){
            this.postorder(node.left, visitorFn);
            this.postorder(node.right, visitorFn);
        }
        visitorFn(node);

    }

    *inorderTraversal(node: Treenode | null = this.root): IterableIterator<Treenode | null> {
        
        if(node){
            yield* this.inorderTraversal(node.left);
        }

        yield node;

        if(node){
            yield* this.inorderTraversal(node.right);
        }

    }
    *postorderTraversal(node: Treenode | null = this.root): IterableIterator<Treenode | null> {

        if(node){
            yield* this.inorderTraversal(node.left);
            yield* this.inorderTraversal(node.right);
        }

        yield node;
    }
    *preorderTraversal(node: Treenode | null = this.root): IterableIterator<Treenode | null> {

        yield node;

        if(node){
            yield* this.inorderTraversal(node.left);
            yield* this.inorderTraversal(node.right);
        }
        
    }
}



//how yeld works: it returns the current value and pauses the function instead of stopping it

// function * intsGenerator(): IterableIterator<number> {
//     let i = 0;
//     while(true) {
//         yield i++;
//     }
// }
// var myInts = intsGenerator();
// console.log(myInts.next());
// console.log(myInts.next());
// console.log(myInts.next());
// console.log(myInts.next());