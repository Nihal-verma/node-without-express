const os=require("os");
//console.log(os.arch());                            //-------------------this will provide the architecture of pc means how many bit processor it have
const freememory=os.freemem()
//console.log(freememory);                           //--------return total amount of ree memory-this will give answer in in byte
//console.log(`${freememory/(1024*1024*1024)}`);     //------------------------this will give ans in GB---------
// let totalmemory = os.totalmem()
// console.log(totalmemory/(1024*1024*1024));           // return total amount of system memory in bytes
console.log(os.hostname());
console.log(os.platform());                             // return the os like linux windows
console.log(os.tmpdir());       // return directory of temporary file
console.log(os.type());        // return the  type os 
