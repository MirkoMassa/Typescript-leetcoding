import {Treenode, bst} from './index'
import assert from 'assert'

describe('bst', ()=>{

    describe('add', ()=>{
        

        it('add array of values to binary search tree', ()=>{
            let mytree = new bst()
            const values = [3, 8, 2, 9, 16, 4, 5];
            //all permutations of [1,2,3]; the number of permutation is a function of the length of the array, and the factorial functions so factor(values.length);
            //

            for (let i = 0; i < values.length; i++) {
                
                mytree.add(values[i]);

            }
            console.log(mytree.print());
            console.log(mytree.search(16));
            mytree.preorder(mytree.root, (node)=>{
                console.log(node?.data ?? node+" has no child");
            })
            assert.equal(mytree.root?.right?.right?.data, 9);

        })
    })

})