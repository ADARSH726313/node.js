const http = require("http");

const app= require("./app");

http.createServer(( req,resp)=>{

    resp.writeHead(200,{

        "Content-type":"application/json"
    })

    resp.write(JSON.stringify(app));


     resp.end();

}).listen(2000)