//**
//    1.Spread
//    2.Rest 
// 
//  */

// Array
// 1.Spread = unpack the elements into individual elements

let arr1=[1,2,3,4,5]

//copy ...arr1 act like a for loop
let arr2=[...arr1,6,7] // [1,2,3,4,5,6,7] 
console.log(arr2);

//concatination
let arr3 = [...arr1,...arr2] //[1,2,3,4,5,1,2,3,4,5,6,7]
console.log(arr3);

//objects

let person = {name: 'John', age:22}
let person2 ={...person,city:'chennai'}
console.log(person2);
let person3={...person,...person2}
console.log(person3);

//function

function add(a,b,...rest){  // 2 numbers only passed 
    console.log(rest);  // pack the remaining numbers
    console.log(a+b); 
}

let num=[1,2,3,4,5,6,7,8]
add(...num)

// string methods

let str="  Hello World"
//length
console.log(str.length)
// forming an array
console.log(str.split(" ")) // ['Hello', 'World']
//lowercase string
console.log(str.toLowerCase())
//uppercase string
console.log(str.toUpperCase())
//trim removes white spaces
console.log(str.trim())


// Array destructuring
let array=[1,2,3,4,5,6,7,8]
let [a,b,c,d] = [1,2,3,4,5,6,7,8]
console.log(d)
console.log(array[3])

// object destructing
let person1 = {name:"vaishu",age:22};
console.log(person1.name)
console.log(person1["age"])
 // destructing
let{name,age}=person1
console.log(name)
console.log(age)


