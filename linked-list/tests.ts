import {node, list} from './index'
import assert from 'assert'

describe('list', ()=>{

    describe('add', ()=>{
        

        it('add array of values to list', ()=>{
            let mylist = new list()
            const values = [3, 8, 2, 9, 16, 4, 5];

            for (let i = 0; i < values.length; i++) {
                
                mylist.add(values[i]);

            }
            console.log();
            //assert.equal();
        })
    })

})