const fs=require('fs');

const data=" I am appending Something";

fs.appendFile("./data.txt",data,(er)=>{
    if(er){
        console.error(er);
    }
    else{
        console.log("data appended successfully");
    }
});
console.log("I am after appending");



