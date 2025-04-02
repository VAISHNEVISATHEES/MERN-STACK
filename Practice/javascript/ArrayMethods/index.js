let arr=[1,2,3,4,5,6,7,8,9,10]

/**
 * 1.Map - like a for loop always returns an array
 * 
 * 2.Filter - like a for loop with condition always returns an array
 * 
 * 3.Reduce -
 * 
 * 
 */

const ans = arr.map((i)=>{
    console.log(i);
    return i
})

console.log(ans);

const ans1= arr.filter((i)=>{
    return i>5
})
console.log(ans1);

const red = arr.reduce((Accumulator,currentvalue)=>{
    return Accumulator + currentvalue
})

console.log(red);