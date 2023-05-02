const EventEmitter=require("events")
const events= new EventEmitter();
events.on("hello",()=>{console.log("hellloooo.....!!!!!!!");})
events.emit("hello")
events.on("add",(a,b)=>{
    console.log(a+b);
})
events.emit("add",5,5)
events.on("sub",(a,b,c,d)=>{
console.log((a+b+c)-d);
});
events.emit("sub",10,20,30,40);