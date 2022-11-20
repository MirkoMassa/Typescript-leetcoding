import {LRUCache, Node} from './index'
import assert from 'assert'

describe('lru cache', ()=>{

    describe('Sequence of operations', ()=>{
        it('Define cache dimention, put and get operations', ()=>{

            const cache = new LRUCache(4);
            // -1
            cache.put(1, 1) // 1
            console.log("put 1")
            cache.put(2, 2) // 1 - 2
            console.log("put 2")
            cache.put(6, 3) // 1 - 2 - 6
            console.log("put 6")
            cache.put(4, 3) // 1 - 2 - 6 - 4
            console.log("put 4")
            cache.put(1, 1) // 2 - 6 - 4 - 1
            console.log("put 1")
            cache.put(1, 1) // 2 - 6 - 4 - 1 
            console.log("put 1")

            assert.equal(cache.size, 4);
            assert([1,2,6,4].every(x => cache.cache.has(x)), "Cache does not have all values added so far");   

            cache.put(5, 3) // 6 - 4 - 1 - 5 - 0

            console.log(cache)
            cache.put(7, 1) // 4 - 1 - 5 - 7 - 0

            
            console.log("lr: ",cache.lr)
            console.log("lr next: ",cache.lr.next)
            console.log(cache.mr.prev!.prev)
            assert([5, 7, 1, 4].every(x => cache.cache.has(x)), "Cache does not have all values added so far");
            
        })
    })
})