const fs=require('fs');

fs.unlink("./File.java",(er)=>{
    if(er){
        console.error(er);
    }
    else{
        console.log("file deleted successfully");
    }
});