import {Treenode, bst} from './index'
import assert from 'assert'

describe('bst', ()=>{

    describe('add', ()=>{
        

        it('add array of values to binary search tree and check if functions are working.', ()=>{
            let mytree = new bst()
            const values = [3, 8, 2, 9, 16, 4, 5];
            //all permutations of [1,2,3]; the number of permutation is a function of the length of the array, and the factorial functions so factor(values.length);

            for (let i = 0; i < values.length; i++) {
                
                mytree.add(values[i]);

            }
            console.log(mytree.print());
            // console.log(mytree.search(16));
            // mytree.inorder(mytree.root, (node)=>{
            //     if(node){
            //         console.log(node?.data);
            //     }
            // })

            console.log("inorder trasversal");
            for (const node of mytree.inorderTraversal()) {
                if(node){
                    console.log(node.data);
                    console.log("the parent is: ",node.parent);
                }
                
            }

            console.log("preorder trasversal");
            for (const node of mytree.preorderTraversal()) {
                if(node){
                    console.log(node.data);
                    console.log("the parent is: ",node.parent);
                }
                
            }

            console.log("postorder trasversal");
            for (const node of mytree.postorderTraversal()) {
                if(node){
                    console.log(node.data);
                    console.log("the parent is: ",node.parent);
                }
                
            }
            //existing data
            console.log("search iterative: "+mytree.searchIterative(4)!.data);
            //non existing data
            console.log("search iterative: "+mytree.searchIterative(6));
            //data in the root
            console.log("search iterative: "+mytree.searchIterative(3)!.data);

            assert.equal(mytree.root?.right?.right?.data, 9);

        })
    })

})