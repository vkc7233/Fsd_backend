const fs=require('fs');

fs.rmdir("./data",(er)=>{     //deleting a directory
    if(er){
        console.error("Error in deleting directory",er);
        return;
    }
    else{
        console.log("Directory deleted successfully");
    }          
 }); 