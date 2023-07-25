const { error } = require("console");
const fs = require("fs");

const path = require("path");

const reqPath = path.join(__dirname,"files")
console.log(reqPath)

for (i=0 ;i<5 ;i++) {

    fs.writeFileSync(reqPath + `/robot${i}.txt`,"hojaega re ")
}

fs.readdir(reqPath,(error,files)=>{

    files.forEach((item)=>{
        console.log(item);


    })


})
