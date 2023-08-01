const EventEmitter = require("events");

const event = new EventEmitter() ;


event.on("ram",(j,r)=>{

    console.log(`${j} shree ${r}`)

})





event.emit("ram","jay","ram")

