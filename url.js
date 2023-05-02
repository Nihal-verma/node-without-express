const url = require("url")
const adr = " http://www.example.com/index.html"
const x = url.parse(adr,true)
console.log(x);