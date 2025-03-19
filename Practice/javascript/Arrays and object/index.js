// arrays
console.log("===Arrays===")
let arr = [1,"Vaishu",true,null]
console.log(arr)

// accessing elements

console.log(arr[0]) 
console.log(arr[1]) 
console.log(arr[4]) //undefined

// changing elements

arr[0] ="Sukanth"
console.log(arr)

// number of elements using length is not methos its a propety

console.log(arr.length)

// adding elements and deleting

console.log(arr.push(1)) // add in last 
console.log(arr)

console.log(arr.pop()) // remove last element
console.log(arr)

console.log("==========================================") 
console.log("===OBject===")

//create a new object

let person = {
    name: "Vaishu",
    age: 22,
}
console.log(person)

//accessing object 1. dot notation 2. bracket notation

//dot notation 
console.log(person.name)
console.log(person.age)
console.log(person.gender) //undefined

//bracket notation
console.log(person["name"])
console.log(person["age"])

// modyfing object properties
person["name"]="Sukanth"
person.age=23
console.log(person)

//adding an element to object
person.gender="male"
console.log(person)

person["wifeName"] ="Vaishu"
console.log(person)
person.number=1234567890
console.log(person)

delete person.number

console.log(person)

//object

let obj ={
    name: "Vaishu",
    age: 22,
    habits : ["Chess","Volleyball"],
    cars :{
        brand : "Venue",
        colour :"White",
        owner : "Sukanth"
    }
}

console.log(obj)
console.log(obj.habits[1])
console.log(obj.cars.brand)

//loose and strict equality
// loose equality checks the number is equal are not
// strict equality checks the datatype is equal are not

let num1=10
let num2="10"

if (num1==num2)
{
    console.log("true")
}
else{
    console.log(" false")
}