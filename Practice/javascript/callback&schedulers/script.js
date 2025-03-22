//setInterval 
let counter =0;
const id = setInterval(function(){
    counter = counter+1;
    console.log(counter);
},1000);

clearInterval(id);