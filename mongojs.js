// var MongoClient=require("mongodb").MongoClient;
// var url = "mongodb://127.0.0.1:27017/ABC";
// MongoClient.connect(url,function(err,db) {
//  if(err) throw err;
//  console.log("Database created!");
//  db.close();    
// })
// const http = require("http");
// const PORT = 3000;
// const hostName = "127.0.0.1";
// const server = http.createServer((req,res) => {
//     res.end("Welco my server  server");
// })
// server.listen(PORT,hostName, () => {
//     console.log(`server is running at http://${hostName}:${PORT}`)
// })
const  MongoClient = require('mongodb').MongoClient;  //MongoClient 
const  url = "mongodb://127.0.0.1:27017";

const client = new MongoClient(url)
async function dbconnect() {
  let result = await client.connect();
  let db = result.db("xyz")
  collection =db.collection("demo1");
  let response = await collection.insertOne({name:"abc"})
  }
dbconnect()
              