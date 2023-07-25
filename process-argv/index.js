const fs = require("fs");

const input = process.argv

if (input[2]=="adi"){

    fs.writeFileSync(input[3],"ho jaega saab ")
}

   else if (input[2]=="adarsh"){

    fs.unlinkSync(input[3])


}


else {
    


    console.log("our assemptions are wrong")
}