 const http = require("http");
 http.createServer((req,resp)=>{

    resp.writeHead(200,{

        "Content-head": "Application/json"
    })
    resp.write(JSON.stringify(("ho jaega ")))
    resp.end();

 }).listen(1500)