const http=require("http");
//const content = require("../streamModule/streampipe");
const fs = require("fs")
const data = fs.readFileSync(`${__dirname}/package-lock.json`,"utf8");

http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"application\json"});
//  res.write(JSON.stringify(content));
   res.write(data)

    res.end();
   
}).listen(5001)