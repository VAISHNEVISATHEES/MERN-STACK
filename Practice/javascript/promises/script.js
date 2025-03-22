// old way

// const response1 = fetch("https://dummyjson.com/products")
// console.log(response1) // return promise in pending status

console.log("=================================")

// const response2 = fetch("https://dummyjson.com/products").then((e)=>{
//     console.log(e) // it returns response but not json data
// })

console.log("=================================")

// const response3 = fetch("https://dummyjson.com/products").then((e)=>{
//     return e.json()
// }).then((e)=>{
//     console.log(e) // it returns json data
// }).catch((err)=>{  // if error catch is thrown
//     console.log("Error: ", err)
// })


//new way 

async function fetchdata()
{
    try{
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        console.log(data);
    }
    catch(err){
        console.log(err);
    }

}

fetchdata()