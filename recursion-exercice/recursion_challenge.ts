// (1) //
//Array.foreach takes a function and applies it to every element in the array
//the function fn takes 3 arguments, the item, the index, and the entire array
//implement it as a recursive function
function forEach(array: string[], fn, i = 0):void {
  //solution
  if(i>=array.length){
    return;
  }
    fn(array[i], i, array);
    forEach(array, fn, i+1);

}

//forEach(["cats", "dogs", "men", "women"], (item, i) => console.log(`${index+1}. it's raining ${item}`))


// (2) //
//map takes an array and applies a function to each element and returns a new array with transformed elements
//the function: fn takes 3 arguments, the item, the index, and the entire array


//untyped
// function mapIterative(arry, fn ) {
//fully typed
function mapIterative<InputType, OutputType>(array: InputType[], fn: (elem: InputType, index: number, arry: InputType[]) => OutputType): OutputType[] {


}

//fully typed
//function map<InputType, OutputType>(arry: InputType[], fn: (elem: InputType, index: number, arry: InputType[]) => OutputType, index: number = 0): OutputType[] {
// untyped
function map(array, fn, i = 0) {

  if (i >= array.length) {
    return [];
    
  } else {
    return [fn(array[i], i, array)].concat(map(array, fn, i + 1));
  }

}

console.log(map(["cats", "dogs", "men", "women"], (item, index) => `${index+1}. it's raining ${item}`))

//untyped 
// function filter(arry, fn, index = 0) {
//fully typed
function filter<A>(arry: A[], fn: (elem: A, index: number, arry: A[]) => boolean, index = 0): A[] {
}
const isEven = (x: number) => x % 2 === 0;
console.log(filter(rangeAlt(1,10), isEven));

//Reduce takes the function and applies it to every item in the array and the accumulator, and returns the accumulator after the whole array
//fn: is a function that takes (accumulator, item, index, arry);
//untyped
//function reduce(arry, fn, accum, index = 0) {

//fully typed
function reduce<A,B>(arry: A[], fn: (accum: B, elem: A, index: number, arry: A[]) => B, accum: B, index: number = 0): B {
}
console.log(reduce([{a:1}, {b:2}, {c: 3, d: 4}], (accum, item) => Object.assign(accum, item), {}))


//****CHALLENGE****

let sample = {
  a: 1,
  b: true,
  c: [1, 2, 3],
  d: { name: "doggo", breed: "samoyed" },
  e: { name: { a: "doggo", b: "Kitty", c: [1, 2, 3] } }
};

let expectOutput = {
  a: 1,
  b: true,
  c_0: 1,
  c_1: 2,
  c_2: 3,
  d_name: "doggo",
  d_breed: "samoyed",
  e_name_a: "doggo",
  e_name_b: "kitty",
  e_name_c_0: 1,
  e_name_c_1: 2,
  e_name_c_2: 3
};

function flattenObject(obj, prefix="") {
}

console.log(flattenObject(sample));
assert.equal(fllatenObject(sample), expectOutput);