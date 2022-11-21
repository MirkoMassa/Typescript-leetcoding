import {LRUCache} from './index'
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
            console.log("expected: 2-6-4-1")
            console.log(cache)

            assert([1,2,6,4].every(x => cache.cache.has(x)), "Cache does not have all values added so far");   
            
            cache.put(5, 3) // 6 - 4 - 1 - 5
            console.log("put 5")
            console.log("expected: 6-4-1-5")
            console.log(cache)
            
            cache.put(7, 1) // 4 - 1 - 5 - 7
            console.log("put 7")
            console.log("expected: 4-1-5-7")
            console.log(cache)
            
            assert([5, 7, 1, 4].every(x => cache.cache.has(x)), "Cache does not have all values added so far");
            
        })
    })
})