var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/mydb";

const abc = new MongoClient(url)
const dbconnect=async()=>{
    let data = await abc.connect()
    let db = data.db("trial")
    collection=db.collection("try1")
    // let insert = await collection.insertOne({name:"attempt"})
    let insert = await collection.find().toArray()
        console.log(insert);
}
dbconnect()