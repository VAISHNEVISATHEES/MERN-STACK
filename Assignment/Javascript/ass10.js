/*
1.What is JavaScript?
	- Javascript is a dynamic and interpreted language used for creating dynamic websites
*/ 

//2.Variables and Types:
console.log("===Variables===")
let username = "Vaishu"
let userage =22
console.log(username)
console.log(userage)
console.log("=======================================")

//3.Comments in JavaScript:

/*
Multiline comments in JavaScript for documentation purpose.
The below code is for calculating two numberic values by using 
Arithmetic operations
*/

//4.Operations:
console.log("===Operators===")
let num1 = 10
let num2 = 20

//Addition

let sum = num1 + num2
console.log("Addition:", sum)

//Subtraction

let subtraction = num1 - num2
console.log("Subtraction:", subtraction)

//Multiplication

let multiplication = num1 * num2
console.log("Multiplication:", multiplication)

//Division

let division = num1 / num2
console.log("Division:", division)

console.log("=======================================")

//5.Data Types:
console.log("===Datatype===")
//Sting => used to store sequence of character 
let name1="Vaishu"
console.log(name1)

//Number => used to store integer and decimal values
let num=10
console.log(num)

//Boolean => used to store true or false values
let bool = true
console.log(bool)

//array => used to store list of items
let arr=[10,20,30]
console.log(arr)
console.log("=======================================")

//6.Functions in JavaScript:
console.log("===Functions===")

function greetUser(name)
{
    console.log(name)
}

greetUser("Vaishu")
console.log("=======================================")

//7.if Else in JavaScript:
console.log("===If-else===")
let temp=45
if (temp>30)
{
    console.log("Its very hot")
}
else
{
    console.log("Its not very hot")
}
console.log("=======================================")

//8.FOR LOOP:
console.log("===loop===")

for (let i=1;i<=5;i++)
    {
        console.log(i)
    }
console.log("=======================================")

//9.Loose vs Strict Equality:

console.log("===Loose vs Strict Equality===")
let x=10
let y="10"

console.log(x==y) 
console.log(x===y) 