const fs =require('fs');

const data="I am New data";

fs.writeFileSync("./data.txt",data)