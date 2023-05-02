const { log } = require("console");
const fs = require("fs")
// fs.writeFile("new.txt", "this is newly created file", 
// (err) => { 
//     console.log("task completed");

//  });
// fs.rename("new.txt","latest.txt",(err) => { 
//     console.log("task completed");

// });
// fs.appendFile("latest.txt","this is appended",(err) => { 
//     console.log("append task is completed");

// });
// fs.appendFile("latest.txt","<h1>this is appended</h1>",(err) => { 
//     console.log("append task is completed");

// });
let y = fs.readFileSync("latest.txt");
console.log(y.toString());
// fs.open('reads.txt', 'r+', function(err, fd) {
//     if (err) {
//        return console.error(err);
//     }
//     console.log("File open successfully");    
//  });
//  var file = fs.readFile("reads.txt","utf-8",(err,data)=>{
//   return data;
    
//  })
//  console.log(file);
//fs.rename("reads.txt","read.txt",(a)=>{console.log("done");})
// const fs = require("fs")
//fs.mkdir("nihal",(err)=>{console.log("folder created");})
//fs.writeFile("./nihal/bio.txt","my name is nihal",(err)=>{console.log("file is created");})
// fs.readFile("./nihal/bio.txt","utf-8",(err,data)=>{
//     console.log(err);                                                 // if any error occured it will display the error otherwise throw null
//     console.log(data);                                                // it will show the data
// })
//fs.unlink("./nihal/bio.txt",(err)=>{console.log("file deleted");})      // this will delete the file
//fs.rmdir("./nihal",(err)=>{console.log("folder deleted");})                // this will remove the folder
