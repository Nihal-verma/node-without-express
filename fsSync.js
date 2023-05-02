const file = require("fs");
file.writeFileSync("read.txt","hello");
file.writeFileSync("read.txt","hello this is addition content");
 file.appendFileSync("read.txt","with appended information")



file.appendFileSync("read.txt","with appended information answer");

// file.appendFileSync("read.txt","with appended information answer skjhjksadbh");
// file.appendFileSync("read.txt","with appended information answer skjhjksadbhbsckjbsd");
// file.appendFileSync("read.txt","with appended information answer skjhjksadbhbsckjbsd");
 const x=file.readFileSync("read.txt") 
// // if we print the x it will return data in buffer data type 
 const y = x.toString()  // converting data into string
 console.log(y); 
// // renaming the file using  renamesync()
 file.rename("read.txt","readww.txt",(err)=>{console.log(err);})
