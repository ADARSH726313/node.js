
// file creation and data entry


const fs = require("fs");

 fs.writeFile("adith.txt","seek raha hu mai async",(err)=>{


     console.log("hii")
 });

//   fresh data entry without disturbing original data


  fs.appendFile("adith.txt", " seek jaega re tu tension mat le ",(err)=>{

     console.log(err)
  })

//    reading data 


  fs.readFile("adith.txt","utf-8",(err,data)=>{

     console.log(data)

  })

  fs.rename("adith.txt","adarsh.txt",(err)=>{
       console.log(err);
   })



    fs.unlink("adarsh.txt",(err)=>{

     console.log(err)


   })