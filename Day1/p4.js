const fs=require('fs');

const read=()=>
{
    fs.readFile("./data.txt","utf-8",(er,data)=>{
        if(er){
           console.error(er);
        }
        else{
           console.log(data);
        }
   })
}
console.log("I am before reading ");
read();
console.log("I am After reading ");