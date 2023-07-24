const { error } = require("console");
const fs =  require("fs");
const path = require("path");

const reqPath = path.join(__dirname,"files")
// console.log(reqPath);


// for (i =0 ;i<5; i++) {

// re    fs.writeFileSync(reqPath+`/robot${i}.txt`, "ho jaega re ladke tu tension mat le ")
// }




fs.readdir(reqPath,(error,files)=>{

    files.forEach((item)=>{

        console.log(`file name id ${item}`)
    })
})
