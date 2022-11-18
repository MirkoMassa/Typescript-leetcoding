// Every recursive function two cases,
// the base case where recursion stops and
// the recursive case where a problem is broken down further.
// All recursive problems are so a divide - and - conquer strategy, solving smaller problems to solve a bigger problem

// given an n, say 5, then them product of n to 1, return 5*4*3*2*1 recursively
// n <= 1 then return 1
// other wise multiply n by factorial of n-1;

function factorial(n:number): number {
    if(n === 0)  return 0;

    if(n <= 1){
        return 1;
    }
    console.log(n+"* ")
    return n * factorial(n-1);
    
}

console.log(factorial(6));
console.log(factorial(0));
console.log(factorial(1));

function factorialIterative(n:number):Number{
    let res = 1;
    if(n === 1)  return res;
    if(n === 0) return 0;
    while(n>1){
        
        res *= n--;
        console.log(n+"  "+res);
    }

    return res;
}
console.log(factorialIterative(6));
console.log(factorialIterative(0));
console.log(factorialIterative(1));

// recursive range function
// range(1,5) = [1,2,3,4,5]; END RESULT

// a > b //stop recursion
// range(6,5) = []; // start > stop

//a < b
// range(a,b) = [a] concat range(a+1,b)
// range(3,5) = [3] concat range(4,5)

function range(start: number, stop: number): number[] {

    if(start > stop){
        return [];
    }
    // [1] + [2,3,4,5] = [1,2,3,4,5];
    // [1] + [2]+ [3,4,5] + [] = [1,2,3,4,5] + [] =[1,2,3,4,5] 

    return [start].concat(range(start+1, stop))
}
console.log(range(3, 7));

//tail-call style
function rangeAlt(start: number, stop: number, accum: number[] = []): number[] {

    if(start > stop){
        return accum;
    }

    return rangeAlt(start+1, stop, accum.concat([start]));

}

// rangeAlt(1,3,[])
// rangeAlt(2,3,[1])
// rangeAlt(3,3,[1,2])
// rangeAlt(4,3,[1,2,3])

//Fibonacci numbers, rule F(0) = 0, F(1) = 1
// F(n) = F(n-1) + F(n-2);
//f(6) = F(5) + f(4) 11 = 8 + 3
//f(5) = F(4) + f(3) 5 = 3 + 2
//f(4) = f(3) + f(2);  3 = 2 + 1
//f(3) = f(2) + f(1); 2 = 1 + 1
//f(2) = f(1) + f(0);  1 = 1 + 0

//0,1,1,2,3,5,8
function fibonacci(n: number): number {
    
    if(n <= 1){

        return n;
    }
    
    return fibonacci(n-1) + fibonacci(n-2);
}
console.log(fibonacci(8))


function fibonacciIterative(n: number): number {

    while(n>1){

        return fibonacci(n-1) + fibonacci(n-2);

    }
    return n;

}
console.log(fibonacciIterative(8))

//fibonacci with an accumulator
function fibonacciAlt(n: number, accum: number = 0){
    if(n<=1){
        return n;
    }
    accum+= fibonacciAlt(n-1)+fibonacciAlt(n-2);
    return accum;
}
console.log(fibonacciAlt(8))


//fibonacci tail-call style (multiple accumulators)
function fibonacciTC(n: number, i: number = 1, curr: number = 0, next: number = 1): number {
    if(n === 0) return 0;
    if(n === 1) return 1;
    if(i >= n) {

        return next;
    }
    else {
        i++;
        return fibonacciTC(n, i, next, curr + next);
    }
};

console.log(fibonacciTC(10));

