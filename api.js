const http = require("http")
// const url = require("url")
const fs = require("fs")
var data = fs.readFileSync(`${__dirname}/apijson.json`, "utf8")
    // console.log(data);
    const objdata = JSON.parse(data)
    // console.log(data);
    // console.log();
    


const server = http.createServer(
    (req,res) =>
{
    if (req.url == "/") {
        res.writeHead(200,{"Content-type":"text/html"})
        res.end("<h1>hello from the server side</h1>");
    } else if (req.url == "/userapi") {
        res.write(data)
    //    res.end("<h1>hello from the userapi side</h1>")
    //    res.write(data)
       res.end(data);
    }else if(req.url=="/contact"){
        res.writeHead(200,{"Content-type":"text/html"})
        res.end("<h1>hello from the ContactUs side</h1>")
    }else if(req.url=="/about"){
        res.writeHead(200,{"Content-type":"text/html"})
        res.end("<h1>hello from the AboutUs side</h1>")
    }
})
server.listen(8088, "127.0.0.1", () => {
    console.log("listen to the port no 8088");
})