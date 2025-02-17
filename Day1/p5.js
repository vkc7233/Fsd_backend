const fs =require('fs');

const data="I write data";

const write=()=>
{
    fs.writeFile("./data.txt",data,(er)=>{
        if(er){
           console.error(er);
        }
        else{
            console.log("data written successfully");
        }
   })
}
write();